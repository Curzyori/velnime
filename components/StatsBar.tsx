'use client';

import { useCallback, useEffect, useState } from 'react';

const API_BASE = 'https://api.velnime.com/v1';

interface Stats {
  users: number;
  downloads: number;
  total_views: number;
  catalog?: {
    total_anime: number;
    total_donghua: number;
    total_episodes: number;
  };
}

function fmtNum(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toLocaleString('id-ID', { maximumFractionDigits: 1 })} jt`;
  if (n >= 1_000) return `${(n / 1_000).toLocaleString('id-ID', { maximumFractionDigits: 1 })} rb`;
  return n.toLocaleString('id-ID');
}

export default function StatsBar() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [failed, setFailed] = useState(false);

  const load = useCallback(() => {
    setFailed(false);
    const ctrl = new AbortController();
    const timeout = setTimeout(() => ctrl.abort(), 10000);
    fetch(`${API_BASE}/stats`, {
      method: 'GET',
      headers: { Accept: 'application/json' },
      signal: ctrl.signal,
    })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error('stats failed'))))
      .then((d) => {
        if (d && typeof d === 'object') {
          const payload = (d as { velnime_app?: Stats }).velnime_app || (d as Stats);
          if (
            typeof payload.users === 'number' ||
            typeof payload.downloads === 'number' ||
            payload.catalog
          ) {
            setStats({
              users: payload.users ?? 0,
              downloads: payload.downloads ?? 0,
              total_views: payload.total_views ?? 0,
              catalog: payload.catalog,
            });
            return;
          }
        }
        setFailed(true);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') setFailed(true);
      })
      .finally(() => clearTimeout(timeout));
    return () => {
      clearTimeout(timeout);
      ctrl.abort();
    };
  }, []);

  useEffect(() => {
    const cleanup = load();
    return cleanup;
  }, [load]);

  if (failed) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="mx-auto mt-10 flex w-full max-w-3xl items-center justify-between gap-4 rounded-2xl border border-white/5 bg-surface px-6 py-4 sm:px-8"
      >
        <p className="text-xs text-inkDim sm:text-sm">Gagal memuat statistik · API tidak merespons</p>
        <button
          type="button"
          onClick={load}
          className="shrink-0 rounded-xl bg-surfaceSoft px-4 py-2 text-xs font-bold text-ink transition-colors hover:bg-accent hover:text-canvas sm:text-sm"
        >
          Coba lagi
        </button>
      </div>
    );
  }
  if (!stats) {
    return (
      <div
        className="mx-auto mt-10 h-20 w-full max-w-3xl rounded-2xl border border-white/5 bg-surface"
        aria-hidden="true"
      />
    );
  }

  const totalTitles =
    (stats.catalog?.total_anime ?? 0) + (stats.catalog?.total_donghua ?? 0);
  const totalEpisodes = stats.catalog?.total_episodes ?? 0;

  const items = [
    ...(totalTitles > 0 ? [{ value: fmtNum(totalTitles), label: 'Judul Anime & Donghua' }] : []),
    ...(totalEpisodes > 0 ? [{ value: fmtNum(totalEpisodes), label: 'Episode Siap Tonton' }] : []),
    ...(stats.users > 0 ? [{ value: fmtNum(stats.users), label: 'Pengguna Aktif' }] : []),
    ...(stats.downloads > 0 ? [{ value: fmtNum(stats.downloads), label: 'Download APK' }] : []),
  ];

  if (items.length === 0) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-10 gap-y-2 rounded-2xl border border-white/5 bg-surface px-8 py-5"
    >
      {items.map((item) => (
        <div key={item.label} className="text-center">
          <p className="font-display text-lg font-bold text-accent">{item.value}</p>
          <p className="text-xs text-inkDim">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
