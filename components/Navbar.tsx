'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/', label: 'Beranda' },
  { href: '/donate', label: 'Donasi' },
  { href: '/info', label: 'Info' },
  { href: '/docs', label: 'Docs' },
];

// Anime API = produk jualan (Craftvel). Comic API dihapus (backend mati).
const API_LINK = { href: 'https://www.craftvel.com/api/velnime-anime-api', label: 'Anime API' };

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close on Escape — menu mobile
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-canvas/80 backdrop-blur-md">
      <nav aria-label="Navigasi utama" className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-1 font-display text-lg font-bold tracking-tight" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, next/image unoptimized */}
          <img src="/favicon.svg" alt="Velnime" width={32} height={32} className="rounded-lg" />
          elnime.com
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <NavLink key={l.href} href={l.href} active={pathname === l.href}>
              {l.label}
            </NavLink>
          ))}
          <a
            href={API_LINK.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center rounded-lg px-3 py-2 text-sm font-medium text-inkDim transition-colors duration-200 hover:bg-surface hover:text-ink"
          >
            {API_LINK.label}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-ink transition-colors hover:bg-surface md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-white/5 bg-canvas/95 px-4 pb-4 backdrop-blur-md md:hidden">
          <div className="flex flex-col">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === l.href ? 'page' : undefined}
                className={`flex min-h-12 items-center rounded-lg px-3 text-sm font-medium transition-colors hover:bg-surface hover:text-ink ${pathname === l.href ? 'text-accent' : 'text-inkDim'}`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={API_LINK.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center rounded-lg px-3 text-sm font-medium text-inkDim transition-colors hover:bg-surface hover:text-ink"
            >
              {API_LINK.label}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={`flex min-h-11 items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-surface hover:text-ink ${active ? 'text-accent' : 'text-inkDim'}`}
    >
      {children}
    </Link>
  );
}