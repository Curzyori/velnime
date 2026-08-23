import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'API — Feed Notifikasi Anime & Donghua',
  description:
    'API feed publik Velnime untuk bot Discord, Telegram, dan RSS. Notifikasi rilis episode anime & donghua gratis, tanpa API key.',
  alternates: { canonical: '/api' },
  openGraph: {
    title: 'API — Feed Notifikasi Anime & Donghua',
    description: 'Feed rilis episode realtime untuk bot Discord & Telegram. Gratis, tanpa API key.',
    url: 'https://www.velnime.com/api',
    siteName: 'Velnime',
    type: 'website',
    locale: 'id_ID',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Velnime' }],
  },
};

const FEED_URL = 'https://api.velnime.com/v1/feed/updates';

export default function ApiPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <div className="mx-auto w-full max-w-4xl flex-1 px-4 py-16 sm:px-6 sm:py-24">
        {/* Hero */}
        <section className="text-center">
          <span className="mb-6 inline-block rounded-full border border-accent/30 bg-accentFaded px-4 py-1.5 text-xs font-semibold text-accent">
            Publik · Gratis · Tanpa API Key
          </span>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tighter sm:text-5xl">
            Feed notifikasi anime & donghua,
            <span className="text-accent"> untuk bot kamu.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-inkDim sm:text-lg">
            Episode baru rilis di Velnime langsung tersedia via feed API. Cocok untuk bot Discord,
            bot Telegram, RSS reader, atau widget website komunitas.
          </p>
        </section>

        {/* Endpoint */}
        <section className="mt-14">
          <h2 className="font-display text-2xl font-bold tracking-tight">Endpoint</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10 bg-surfaceSoft p-4">
            <code className="text-sm text-accent">GET {FEED_URL}?type=all&amp;limit=20</code>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <Param name="type" desc="all · anime · donghua" />
            <Param name="limit" desc="Jumlah item, maks 50" />
            <Param name="auth" desc="Tidak perlu — publik" />
          </div>
        </section>

        {/* Response example */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold tracking-tight">Contoh Response</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10 bg-[#0B0B14] p-5">
            <pre className="text-xs leading-relaxed text-inkDim">
{`{
  "ok": true,
  "total": 2,
  "items": [
    {
      "id": "re-zero-s4-episode-14",
      "title": "Re:Zero kara Hajimeru Isekai Seikatsu Season 4",
      "anime_slug": "re-zero-kara-hajimeru-isekai-seikatsu-season-4",
      "episode_number": 14,
      "episode_title": "Episode 14",
      "type": "anime",
      "poster_url": "https://api.velnime.com/v1/poster?token=...",
      "download_app_url": "https://velnime.com",
      "released_at": "August 23, 2026"
    }
  ]
}`}
            </pre>
          </div>
        </section>

        {/* Quick start */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold tracking-tight">Quick Start</h2>
          <p className="mt-3 text-sm text-inkDim">
            Pola paling simpel: poll tiap 3 menit → bandingkan dengan ID terakhir yang kamu simpan →
            kirim item baru ke channel kamu.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10 bg-[#0B0B14] p-5">
            <pre className="text-xs leading-relaxed text-inkDim">
{`// Node.js — contoh poller (Discord webhook)
let lastId = null; // simpan persisten di produksi

setInterval(async () => {
  const res = await fetch(
    '${FEED_URL}?limit=10'
  ).then((r) => r.json());

  const fresh = lastId
    ? res.items.filter((i) => /* sampai ketemu lastId */ false)
    : [];

  for (const item of fresh.reverse()) {
    await fetch(process.env.DISCORD_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        embeds: [{
          title: \`\${item.title} — \${item.episode_title}\`,
          description: 'Baru rilis di Velnime!',
          image: { url: item.poster_url },
          color: item.type === 'donghua' ? 0xe63946 : 0x457b9d,
        }],
      }),
    });
  }

  if (res.items.length) lastId = res.items[0].id;
}, 3 * 60 * 1000);`}
            </pre>
          </div>
        </section>

        {/* Use cases */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold tracking-tight">Use Case</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <UseCase
              icon="🤖"
              title="Bot Discord"
              desc="Post embed card otomatis tiap episode baru ke channel #update-anime atau #update-donghua."
            />
            <UseCase
              icon="📨"
              title="Bot Telegram"
              desc="Kirim broadcast ke channel/grup komunitas dengan poster dan link download app."
            />
            <UseCase
              icon="📰"
              title="RSS Reader"
              desc="Ubah feed jadi sumber RSS custom untuk aplikasi reader favoritmu."
            />
            <UseCase
              icon="🌐"
              title="Widget Website"
              desc="Tampilkan episode terbaru di website komunitas anime kamu."
            />
          </div>
        </section>

        {/* Craftvel CTA */}
        <section className="mt-14">
          <div className="rounded-2xl border border-accent/20 bg-surface p-8 text-center sm:p-12">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Butuh lebih dari notifikasi?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-inkDim sm:text-base">
              Katalog lengkap 2.434 judul &amp; 39.151 episode, pencarian, detail, dan streaming
              multi-kualitas hingga 1080p — tersedia via{' '}
              <strong className="text-ink">Velnime Anime API</strong> di Craftvel.
            </p>
            <a
              href="https://www.craftvel.com/api/velnime-anime-api"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-xl bg-accent px-8 py-3.5 font-display text-sm font-bold text-canvas transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Lihat Paket &amp; Harga
            </a>
          </div>
        </section>

        {/* Terms */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold tracking-tight">Batas Penggunaan</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-inkDim">
            <li>Rate limit 60 request/menit per IP — poll tiap 3 menit sudah lebih dari cukup.</li>
            <li>Feed hanya berisi metadata rilis. Dilarang scraping massal katalog.</li>
            <li>
              Butuh akses katalog penuh? Gunakan{' '}
              <a
                href="https://www.craftvel.com/api/velnime-anime-api"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Velnime Anime API (Craftvel)
              </a>
              .
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

function Param({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="rounded-xl border border-white/5 bg-surface p-4">
      <p className="font-mono text-sm font-semibold text-accent">{name}</p>
      <p className="mt-1 text-xs text-inkDim">{desc}</p>
    </div>
  );
}

function UseCase({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-white/5 bg-surface p-6 transition-colors duration-200 hover:border-accent/30 hover:bg-surfaceSoft">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-surfaceSoft text-lg" aria-hidden="true">
        {icon}
      </div>
      <h3 className="font-display text-base font-bold">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-inkDim">{desc}</p>
    </div>
  );
}
