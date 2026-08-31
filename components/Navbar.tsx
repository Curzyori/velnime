'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/', label: 'Beranda' },
  { href: '/api', label: 'API' },
  { href: '/docs', label: 'Docs' },
  { href: '/downloads', label: 'Downloads' },
  { href: '/donate', label: 'Donasi' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [inboxOpen, setInboxOpen] = useState(false);
  const inboxRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside or Escape
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (inboxRef.current && !inboxRef.current.contains(e.target as Node)) {
        setInboxOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        setInboxOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    window.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-canvas/80 backdrop-blur-md">
      <nav aria-label="Navigasi utama" className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-1.5 font-display text-lg font-bold tracking-tight" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, next/image unoptimized */}
          <img src="/favicon.svg" alt="Velnime" width={30} height={30} className="rounded-lg" />
          <span className="bg-gradient-to-r from-white via-white/90 to-accent bg-clip-text text-transparent">velnime.com</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <NavLink key={l.href} href={l.href} active={pathname === l.href}>
              {l.label}
            </NavLink>
          ))}

          {/* Inbox / Notification Dropdown */}
          <div className="relative ml-1" ref={inboxRef}>
            <button
              type="button"
              onClick={() => setInboxOpen((prev) => !prev)}
              title="Pusat Informasi & Pemberitahuan"
              aria-expanded={inboxOpen}
              aria-label="Pemberitahuan"
              className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-200 hover:bg-surface hover:text-accent ${inboxOpen ? 'bg-surface text-accent' : 'text-inkDim'}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0" />
              </svg>
            </button>

            {/* Inbox Popover / Dropdown Card */}
            {inboxOpen && (
              <div className="absolute right-0 top-12 z-50 w-80 rounded-2xl border border-white/10 bg-surface/95 p-4 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-accent" />
                    <h3 className="font-display text-sm font-bold text-ink">Informasi &amp; Pengumuman</h3>
                  </div>
                  <span className="text-[10px] font-semibold text-inkDim">0 Baru</span>
                </div>

                <div className="py-6 text-center">
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-inkDim">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  </div>
                  <p className="text-xs font-medium text-ink">Belum Ada Informasi Baru</p>
                  <p className="mt-1 text-[11px] leading-relaxed text-inkDim">
                    Pengumuman rilis, maintenance server, dan pembaruan sistem akan muncul di sini.
                  </p>
                </div>
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
          <div className="flex flex-col pt-2">
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

            {/* Mobile Inbox Notice Box */}
            <div className="mt-3 rounded-xl border border-white/5 bg-surface/70 p-3.5">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" className="text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0" />
                </svg>
                <span className="text-xs font-bold text-ink">Informasi Terkini</span>
              </div>
              <p className="mt-1.5 text-xs text-inkDim">
                Belum ada informasi baru saat ini.
              </p>
            </div>
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
      className={`flex min-h-10 items-center rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200 hover:bg-surface hover:text-ink ${active ? 'bg-surfaceSoft text-accent' : 'text-inkDim'}`}
    >
      {children}
    </Link>
  );
}
