import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 — Halaman Tidak Ditemukan',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-canvas px-4 text-center text-ink">
      <p className="font-display text-7xl font-bold text-accent">404</p>
      <h1 className="font-display mt-4 text-2xl font-bold">Halaman tidak ditemukan</h1>
      <p className="mt-2 text-inkDim">Halaman yang kamu cari tidak ada atau sudah dipindah.</p>
      <Link
        href="/"
        className="mt-8 rounded-xl bg-accent px-8 py-3 font-display text-sm font-bold text-canvas transition-transform duration-200 hover:scale-[1.02]"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
