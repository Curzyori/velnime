'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/', label: 'Beranda' },
  { href: '/donate', label: 'Donasi' },
  { href: '/info', label: 'Info' },
  { href: '/docs', label: 'Docs' },
  { href: '/privacy', label: 'Privacy' },
];

// SEO-2: comic-api 404 — arahkan ke /api (halaman index API Craftvel, sama kayak footer)
const API_LINKS = [
  { href: 'https://www.craftvel.com/api/velnime-anime-api', label: 'Anime API' },
  { href: 'https://www.craftvel.com/api', label: 'Comic API' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [apiOpen, setApiOpen] = useState(false);
  const [mobileApiOpen, setMobileApiOpen] = useState(false);
  const apiRef = useRef<HTMLDivElement>(null);

  // Close on Escape — semua panel (mobile + desktop dropdown)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        setApiOpen(false);
        setMobileApiOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Close dropdown on outside click (desktop)
  useEffect(() => {
    if (!apiOpen) return;
    const onClick = (e: MouseEvent) => {
      if (apiRef.current && !apiRef.current.contains(e.target as Node)) setApiOpen(false);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [apiOpen]);

  // Keyboard: ArrowDown buka dropdown, ArrowUp/Tab nutup
  const onApiKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' && !apiOpen) {
      e.preventDefault();
      setApiOpen(true);
    } else if (e.key === 'ArrowUp' || e.key === 'Tab') {
      setApiOpen(false);
    }
  };

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
          {/* API dropdown */}
          <div className="relative" ref={apiRef}>
            <button
              type="button"
              onClick={() => setApiOpen((v) => !v)}
              onKeyDown={onApiKeyDown}
              aria-expanded={apiOpen}
              aria-haspopup="true"
              aria-controls="api-dropdown"
              className="flex min-h-11 items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-inkDim transition-colors duration-200 hover:bg-surface hover:text-ink"
            >
              API
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className={`transition-transform duration-200 ${apiOpen ? 'rotate-180' : ''}`}>
                <path d="M2.5 4.5L6 8l3.5-3.5" />
              </svg>
            </button>
            {apiOpen && (
              <div id="api-dropdown" className="absolute right-0 mt-2 w-52 rounded-xl border border-white/10 bg-surface p-1.5 shadow-xl">
                {API_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setApiOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-inkDim transition-colors hover:bg-surfaceSoft hover:text-ink"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </div>
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
            {/* API accordion */}
            <button
              type="button"
              onClick={() => setMobileApiOpen((v) => !v)}
              aria-expanded={mobileApiOpen}
              aria-haspopup="true"
              className="flex min-h-12 items-center justify-between rounded-lg px-3 text-sm font-medium text-inkDim transition-colors hover:bg-surface hover:text-ink"
            >
              API
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className={`transition-transform duration-200 ${mobileApiOpen ? 'rotate-180' : ''}`}>
                <path d="M2.5 4.5L6 8l3.5-3.5" />
              </svg>
            </button>
            {mobileApiOpen && (
              <div className="mb-1 flex flex-col">
                {API_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex min-h-11 items-center rounded-lg pl-6 pr-3 text-sm font-medium text-inkDim transition-colors hover:bg-surface hover:text-ink"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            )}
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
