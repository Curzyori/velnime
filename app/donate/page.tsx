'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';

const API_BASE = 'https://api.velnime.com/v1';
const NOMINALS = [5000, 10000, 20000, 50000, 100000];
const MIN_AMOUNT = 1000;
const MAX_AMOUNT = 10000000;

// M3: module scope — gak pakai state, jangan re-create tiap render (child QrPayment re-render tiap detik).
const fmtTime = (s: number) => {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return h > 0
    ? `${h}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
    : `${m}:${String(sec).padStart(2, '0')}`;
};
const fmtIDR = (n: number) => `Rp ${n.toLocaleString('id-ID')}`;

interface TopDonation {
  id: number;
  name: string;
  amount: number;
  note: string;
  user_id?: string;
  avatar_url?: string;
}

function isTopDonation(d: unknown): d is TopDonation {
  if (!d || typeof d !== 'object') return false;
  const o = d as Record<string, unknown>;
  return typeof o.name === 'string' && typeof o.amount === 'number';
}

function parseDonations(data: unknown): TopDonation[] {
  if (!data || typeof data !== 'object' || !Array.isArray((data as { donations?: unknown }).donations)) return [];
  return (data as { donations: unknown[] }).donations.filter(isTopDonation).map((d) => ({
    id: typeof d.id === 'number' ? d.id : 0,
    name: d.name,
    amount: d.amount,
    note: typeof d.note === 'string' ? d.note : '',
    user_id: typeof d.user_id === 'string' ? d.user_id : undefined,
    avatar_url: typeof d.avatar_url === 'string' ? d.avatar_url : undefined,
  }));
}

interface DonateResponse {
  order_id: string;
  amount: number;
  fee: number;
  total_payment: number;
  qr_string: string;
  expired_at: string;
}

const ERROR_MESSAGES: Record<string, string> = {
  RATE_LIMITED: 'Terlalu banyak percobaan. Coba lagi beberapa saat lagi.',
  INVALID_AMOUNT: 'Nominal donasi harus Rp 1.000 — Rp 10.000.000.',
  PAYMENT_NOT_CONFIGURED: 'Pembayaran sedang tidak tersedia. Coba lagi nanti.',
  PAYMENT_PROVIDER_ERROR: 'Gagal membuat pembayaran. Coba lagi.',
  DB_ERROR: 'Gagal menyimpan donasi. Coba lagi.',
  INTERNAL_ERROR: 'Terjadi kesalahan pada server. Coba lagi.',
};

function friendlyError(data: unknown, fallback: string): string {
  const code =
    data && typeof data === 'object' && 'error' in data
      ? (data as { error?: { code?: string } }).error?.code
      : undefined;
  return (code && ERROR_MESSAGES[code]) || fallback;
}

async function readJson(resp: Response): Promise<unknown> {
  const text = await resp.text();
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

export default function DonatePage() {
  const [amount, setAmount] = useState(10000);
  const [customAmount, setCustomAmount] = useState('');
  const [showCustom, setShowCustom] = useState(false);
  const [donorName, setDonorName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [qr, setQr] = useState<DonateResponse | null>(null);
  const [remaining, setRemaining] = useState(0);
  const [successData, setSuccessData] = useState<{ amount: number; name?: string } | null>(null);
  const [topDonations, setTopDonations] = useState<TopDonation[]>([]);
  const [topState, setTopState] = useState<'loading' | 'ready' | 'error'>('loading');
  const [totalDonations, setTotalDonations] = useState<number | null>(null);

  // Fetch top donations + total terkumpul
  const loadTop = useCallback(() => {
    const ctrl = new AbortController();
    const timeout = setTimeout(() => ctrl.abort(), 10000);
    setTopState('loading');
    fetch(`${API_BASE}/donate/top`, { signal: ctrl.signal })
      .then((r) => {
        if (!r.ok) throw new Error('top failed');
        return r.json();
      })
      .then((data) => {
        setTopDonations(parseDonations(data));
        if (data && typeof data === 'object' && typeof (data as { monthly_total?: unknown }).monthly_total === 'number') {
          setTotalDonations((data as { monthly_total: number }).monthly_total);
        } else if (data && typeof data === 'object' && typeof (data as { total?: unknown }).total === 'number') {
          setTotalDonations((data as { total: number }).total);
        }
        setTopState('ready');
      })
      .catch((err) => {
        if (err.name !== 'AbortError') setTopState('error');
      })
      .finally(() => clearTimeout(timeout));
    return () => {
      clearTimeout(timeout);
      ctrl.abort();
    };
  }, []);

  // Fetch total terkumpul dari /stats (fallback jika donate/top tidak kasih total)
  useEffect(() => {
    if (totalDonations !== null) return;
    const ctrl = new AbortController();
    const timeout = setTimeout(() => ctrl.abort(), 10000);
    fetch(`${API_BASE}/stats`, { headers: { Accept: 'application/json' }, signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error('stats failed'))))
      .then((d) => {
        const v = (d as { velnime_app?: { donations?: number } }).velnime_app?.donations;
        if (typeof v === 'number') setTotalDonations(v);
      })
      .catch(() => {})
      .finally(() => clearTimeout(timeout));
    return () => {
      clearTimeout(timeout);
      ctrl.abort();
    };
  }, [totalDonations]);

  useEffect(() => loadTop(), [loadTop]);

  // Countdown — interval cuma jalan saat tab visible (M2: jangan re-render tiap detik di background).
  // F-02: clearInterval saat expired (diff <= 0) biar gak CPU leak.
  useEffect(() => {
    if (!qr) return;
    const id = setInterval(() => {
      if (document.visibilityState === 'visible') tick();
    }, 1000);
    const tick = () => {
      const diff = Math.floor((new Date(qr.expired_at).getTime() - Date.now()) / 1000);
      const next = Math.max(0, diff);
      setRemaining(next);
      if (next <= 0) {
        clearInterval(id);
        document.removeEventListener('visibilitychange', onVis);
      }
    };
    const onVis = () => {
      if (document.visibilityState === 'visible') tick();
    };
    tick();
    document.addEventListener('visibilitychange', onVis);
    return () => {
      clearInterval(id);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, [qr]);

  // Polling status order tiap 3 detik saat QR aktif.
  // Begitu completed -> trigger success state + reload papan top donatur.
  useEffect(() => {
    if (!qr) return;
    const orderId = qr.order_id;
    const donatedAmount = qr.amount;
    let stopped = false;

    const poll = async () => {
      if (stopped || document.visibilityState !== 'visible') return;
      try {
        const res = await fetch(`${API_BASE}/donate/status/${encodeURIComponent(orderId)}`);
        if (!res.ok) return;
        const data = await res.json();
        if (data && data.status === 'completed') {
          stopped = true;
          setSuccessData({ amount: donatedAmount, name: donorName || undefined });
          setQr(null);
          setRemaining(0);
          loadTop();
        }
      } catch {
        // silent fail, retry di interval berikutnya
      }
    };

    const intervalId = setInterval(poll, 3000);
    return () => {
      stopped = true;
      clearInterval(intervalId);
    };
  }, [qr, donorName, loadTop]);

  const submitRef = useRef(false);

  const submit = async () => {
    if (submitRef.current || loading || qr) return;
    submitRef.current = true;
    const finalAmount = showCustom ? parseInt(customAmount, 10) || 0 : amount;
    if (!Number.isInteger(finalAmount) || finalAmount < MIN_AMOUNT || finalAmount > MAX_AMOUNT) {
      submitRef.current = false;
      setError(`Nominal donasi harus Rp 1.000 — Rp 10.000.000.`);
      return;
    }
    setLoading(true);
    setError('');
    try {
      const headers: Record<string, string> = { 'Content-Type': 'application/json' };
      const body: Record<string, unknown> = { amount: finalAmount, donor_name: donorName || null };
      const resp = await fetch(`${API_BASE}/donate/create`, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
      });
      const data = await readJson(resp);
      if (!data || !(data as DonateResponse).qr_string) {
        throw new Error(
          friendlyError(data, resp.ok ? 'Gagal membuat QR. Coba lagi.' : 'Server bermasalah. Coba lagi nanti.')
        );
      }
      setQr(data as DonateResponse);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan.');
    } finally {
      submitRef.current = false;
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <div className="mx-auto w-full max-w-2xl flex-1 px-4 py-12 sm:px-6">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Dukung <span className="text-accent">Velnime</span>
          </h1>
          <p className="mt-3 text-inkDim">
            Donasi via QRIS. Fee hanya 0.7%. Bantu server, domain, dan pengembangan.
          </p>
          <p className="mt-2 text-sm text-inkDim">
            Login dulu di <span className="text-accent">aplikasi Velnime</span> biar donasi-mu terhubung ke akun & dapat status supporter.{' '}
            <Link
              href="https://github.com/Curzyori/velnime/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline-offset-2 hover:underline"
            >
              Download APK
            </Link>
          </p>
        </div>

        {/* QR Payment, Success State, or Form */}
        <div className="mt-10 rounded-2xl border border-white/5 bg-surface p-6 sm:p-8">
          {successData ? (
            <div className="flex flex-col items-center py-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-3xl text-emerald-400">
                ✓
              </div>
              <h2 className="font-display mt-4 text-2xl font-bold text-ink">
                Terima Kasih Banyak! 💖
              </h2>
              <p className="mt-2 max-w-md text-sm text-inkDim">
                Donasi sebesar <span className="font-bold text-accent">{fmtIDR(successData.amount)}</span>{' '}
                {successData.name ? `dari ${successData.name} ` : ''}sudah kami terima. Dukunganmu sangat berarti untuk menjaga server tetap hidup & bebas iklan!
              </p>
              <button
                type="button"
                onClick={() => setSuccessData(null)}
                className="mt-6 cursor-pointer rounded-xl bg-accent px-6 py-2.5 font-display text-sm font-bold text-canvas transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Donasi Lagi
              </button>
            </div>
          ) : qr ? (
            <QrPayment
              qr={qr}
              remaining={remaining}
              fmtTime={fmtTime}
              fmtIDR={fmtIDR}
              onReset={() => {
                setQr(null);
                setRemaining(0);
              }}
            />
          ) : (
            <form
              aria-busy={loading}
              onSubmit={(e) => {
                e.preventDefault();
                submit();
              }}
            >
              <p className="font-display text-sm font-bold text-inkDim">Pilih Nominal:</p>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {NOMINALS.map((n) => (
                  <button
                    type="button"
                    key={n}
                    onClick={() => {
                      setAmount(n);
                      setShowCustom(false);
                    }}
                    aria-pressed={!showCustom && amount === n}
                    className={`min-h-12 rounded-lg px-2 font-display text-sm font-bold transition-colors duration-200 ${
                      !showCustom && amount === n
                        ? 'bg-accent text-canvas'
                        : 'bg-surfaceSoft text-ink hover:bg-surfaceHover'
                    }`}
                  >
                    Rp {n / 1000}rb
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setShowCustom(true)}
                  aria-pressed={showCustom}
                  className={`min-h-12 rounded-lg px-2 font-display text-sm font-bold transition-colors duration-200 ${
                    showCustom ? 'bg-accent text-canvas' : 'bg-surfaceSoft text-ink hover:bg-surfaceHover'
                  }`}
                >
                  Lainnya
                </button>
              </div>

              {showCustom && (
                <div className="mt-3">
                  <label htmlFor="custom-amount" className="sr-only">
                    Nominal donasi (Rp)
                  </label>
                  <input
                    id="custom-amount"
                    type="text"
                    inputMode="numeric"
                    autoComplete="off"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value.replace(/\D/g, '').slice(0, 9))}
                    placeholder="Nominal (Rp)"
                    className="w-full rounded-lg border border-white/10 bg-canvas px-4 py-3 text-ink placeholder:text-inkDim/70 focus:border-accent focus-visible:outline-2 focus-visible:outline-accent"
                  />
                </div>
              )}

              <div className="mt-3">
                <label htmlFor="donor-name" className="font-display text-sm font-bold text-inkDim">
                  Nama (opsional)
                </label>
                <input
                  id="donor-name"
                  type="text"
                  autoComplete="name"
                  maxLength={50}
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  placeholder="Tampil di Top Donatur, atau biarkan kosong untuk Anonim"
                  className="mt-1 w-full rounded-lg border border-white/10 bg-canvas px-4 py-3 text-ink placeholder:text-inkDim/70 focus:border-accent focus-visible:outline-2 focus-visible:outline-accent"
                />
              </div>

              {error && (
                <p role="alert" className="mt-3 text-sm text-red-400">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-6 w-full cursor-pointer rounded-xl bg-accent py-3.5 font-display text-sm font-bold text-canvas transition-transform duration-200 hover:scale-[1.01] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading
                  ? 'Membuat QR...'
                  : `Dukung ${showCustom && customAmount ? fmtIDR(parseInt(customAmount)) : fmtIDR(amount)}`}
              </button>
            </form>
          )}
        </div>

        {/* Total Terkumpul Banner */}
        {totalDonations !== null && (
          <div className="mt-10 rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/10 via-surface to-surface px-6 py-5 sm:px-8 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-inkDim">Total Donasi Terkumpul</p>
              <p className="font-display mt-1 text-2xl font-bold text-accent sm:text-3xl">{fmtIDR(totalDonations)}</p>
              <p className="mt-1 text-xs text-inkDim">Dari komunitas untuk operasional server &amp; domain</p>
            </div>
            <span className="shrink-0 rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-bold text-emerald-400">Transparan · Real-time</span>
          </div>
        )}

        {/* Top Donations */}
        <div className="mt-12">
          <h2 className="font-display text-xl font-bold">Top Donatur</h2>
          {topState === 'loading' && <p className="mt-4 text-sm text-inkDim">Memuat donatur...</p>}
          {topState === 'error' && (
            <div className="mt-4 flex items-center gap-3">
              <p className="text-sm text-inkDim">Gagal memuat donatur.</p>
              <button
                type="button"
                onClick={loadTop}
                className="rounded-lg border border-white/10 bg-surfaceSoft px-3 py-1.5 text-xs font-bold text-ink transition-colors hover:bg-surfaceHover"
              >
                Coba lagi
              </button>
            </div>
          )}
          {topState === 'ready' && topDonations.length === 0 && (
            <p className="mt-4 text-sm text-inkDim">Belum ada donasi. Jadilah yang pertama! 🎉</p>
          )}
          {topState === 'ready' && topDonations.length > 0 && (
            <div className="mt-4 space-y-2">
              {topDonations.map((d, i) => (
                <div key={`${d.id}-${i}`} className="flex items-center justify-between rounded-lg border border-white/5 bg-surface px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="font-display w-8 text-center text-sm font-bold text-accent" aria-hidden="true">
                      {i < 3 ? `#${i + 1}` : `${i + 1}.`}
                    </span>
                    {d.avatar_url ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={d.avatar_url} alt="" width={28} height={28} className="rounded-full" referrerPolicy="no-referrer" />
                    ) : (
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-surfaceSoft text-xs font-bold text-ink">
                        {(d.name || 'A').charAt(0).toUpperCase()}
                      </span>
                    )}
                    <div>
                      <p className="font-medium">{d.name.slice(0, 50) || 'Anonim'}</p>
                      {d.note && <p className="text-xs text-inkDim">{d.note.slice(0, 200)}</p>}
                    </div>
                  </div>
                  <span className="font-display text-sm font-bold text-accent">{fmtIDR(d.amount)}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function QrPayment({
  qr,
  remaining,
  fmtTime,
  fmtIDR,
  onReset,
}: {
  qr: DonateResponse;
  remaining: number;
  fmtTime: (s: number) => string;
  fmtIDR: (n: number) => string;
  onReset: () => void;
}) {
  const expired = remaining <= 0;
  return (
    <div className="flex flex-col items-center text-center">
      <p className="font-display text-sm font-bold text-inkDim">Scan QR dengan e-wallet / m-banking</p>
      <div className={`mt-3 font-display text-lg font-bold ${remaining < 300 ? 'text-red-400' : 'text-accent'}`}>
        {expired ? 'Waktu habis' : `Sisa waktu: ${fmtTime(remaining)}`}
      </div>
      {!expired && (
        <div className="mt-4 rounded-xl bg-white p-4">
          <QrCode value={qr.qr_string} size={224} />
        </div>
      )}
      <p className="mt-4 text-sm text-inkDim">
        Total bayar: <span className="font-bold text-ink">{fmtIDR(qr.total_payment)}</span> (termasuk fee {fmtIDR(qr.fee)})
      </p>
      <p className="mt-1 text-xs text-inkDim">Order: {qr.order_id}</p>
      <button
        onClick={onReset}
        className="mt-6 rounded-xl border border-white/10 bg-surfaceSoft px-6 py-2.5 font-display text-sm font-bold text-ink transition-colors hover:bg-surfaceHover"
      >
        Buat Donasi Lain
      </button>
    </div>
  );
}

function QrCode({ value, size }: { value: string; size: number }) {
  const [dataUrl, setDataUrl] = useState('');
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setFailed(false);
    import('qrcode')
      .then((QRCode) => QRCode.toDataURL(value, { width: size, margin: 0 }))
      .then((url) => {
        if (!cancelled) setDataUrl(url);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, [value, size]);

  if (failed) {
    return <p className="text-sm text-red-400">Gagal memuat QR. Muat ulang halaman untuk mencoba lagi.</p>;
  }
  return dataUrl ? (
    // eslint-disable-next-line @next/next/no-img-element -- static export, next/image unoptimized
    <img src={dataUrl} alt="Kode QR pembayaran. Scan dengan e-wallet untuk menyelesaikan donasi." width={size} height={size} />
  ) : (
    <div
      role="status"
      aria-live="polite"
      aria-label="Memuat kode QR"
      style={{ width: size, height: size }}
      className="animate-pulse bg-gray-200"
    />
  );
}
