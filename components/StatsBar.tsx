'use client';

import { useEffect, useState } from 'react';

const API_BASE = 'https://api.velnime.com/v1';

interface Stats {
  users: number;
  downloads: number;
}

function fmtNum(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toLocaleString('id-ID', { maximumFractionDigits: 1 })} jt`;
  if (n >= 1_000) return `${(n / 1_000).toLocaleString('id-ID', { maximumFractionDigits: 1 })} rb`;
  return n.toLocaleString('id-ID');
}

export default function StatsBar() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const ctrl = new AbortController();
    const timeout = setTimeout(() => ctrl.abort(), 10000);
    fetch(`${API_BASE}/stats`, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error('stats failed'))))
      .then((d) => {
        if (
          d &&
          typeof d === 'object' &&
          typeof (d as Stats).users === 'number' &&
          typeof (d as Stats).downloads === 'number'
        ) {
          setStats(d as Stats);
        } else {
          setFailed(true);
        }
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

  if (failed) return null;
  if (!stats) {
    return (
      <div
        className="mx-auto mt-10 h-20 w-full max-w-3xl rounded-2xl border border-white/5 bg-surface"
        aria-hidden="true"
      />
    );
  }

  const items = [
    ...(stats.users > 0 ? [{ value: fmtNum(stats.users), label: 'Pengguna Aktif' }] : []),
    { value: fmtNum(stats.downloads), label: 'Download APK' },
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
