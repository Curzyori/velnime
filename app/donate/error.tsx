'use client';

// M10: error boundary — kalau ada runtime error di client component, jangan blank page.
export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="font-display text-2xl font-bold">Terjadi kesalahan</h1>
      <p className="text-sm text-inkDim">
        Terjadi kesalahan tak terduga. Coba muat ulang halaman.
      </p>
      <button
        onClick={() => reset()}
        className="rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-ink transition-colors hover:bg-accent/80"
      >
        Coba lagi
      </button>
    </div>
  );
}
