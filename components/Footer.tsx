import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        <p className="text-sm text-inkDim">
          © {new Date().getFullYear()} Velnime. Dikembangkan oleh <a href="https://github.com/Curzyori" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">Curzyori</a>.{' '}
          <span className="mx-1">·</span> Kontak:{' '}
          <a href="mailto:admin@velnime.com" className="transition-colors hover:text-ink">
            admin@velnime.com
          </a>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-inkDim">
          {/* Legal / Policy Links */}
          <Link href="/privacy" className="flex min-h-11 items-center transition-colors hover:text-ink">
            Privacy
          </Link>
          <Link href="/tos" className="flex min-h-11 items-center transition-colors hover:text-ink">
            TOS
          </Link>
          <Link href="/dmca" className="flex min-h-11 items-center transition-colors hover:text-ink">
            DMCA
          </Link>

          {/* Social Media & Community Links */}
          <a
            href="https://discord.gg/VzdCY7HK7f"
            target="_blank"
            rel="noopener noreferrer"
            title="Discord Velnime Community"
            className="flex min-h-11 items-center transition-colors hover:text-accent"
          >
            Discord
          </a>
          <a
            href="https://instagram.com/velnimeapp"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram @velnimeapp"
            className="flex min-h-11 items-center transition-colors hover:text-accent"
          >
            Instagram
          </a>
          <a
            href="https://threads.net/@velnimeapp"
            target="_blank"
            rel="noopener noreferrer"
            title="Threads @velnimeapp"
            className="flex min-h-11 items-center transition-colors hover:text-accent"
          >
            Threads
          </a>
          <a
            href="https://github.com/Curzyori/velnime"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Repository"
            className="flex min-h-11 items-center transition-colors hover:text-ink"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
