import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        <p className="text-sm text-inkDim">
          © {new Date().getFullYear()} Velnime. Dikembangkan oleh Curzy.{' '}
          <span className="mx-1">·</span> Kontak:{' '}
          <a href="mailto:admin@velnime.com" className="transition-colors hover:text-ink">
            admin@velnime.com
          </a>
        </p>
        <div className="flex items-center gap-6 text-sm text-inkDim">
          <Link href="/privacy" className="flex min-h-11 items-center transition-colors hover:text-ink">
            Privacy
          </Link>
          <Link href="/tos" className="flex min-h-11 items-center transition-colors hover:text-ink">
            TOS
          </Link>
          <Link href="/dmca" className="flex min-h-11 items-center transition-colors hover:text-ink">
            DMCA
          </Link>
          <a href="https://github.com/Curzyori/velnime" target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center transition-colors hover:text-ink">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
