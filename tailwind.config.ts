import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#0F0F1A',
        surface: '#1A1A2E',
        surfaceSoft: '#252540',
        surfaceHover: '#2E2E4A',
        accent: '#E85D0F',
        accentFaded: '#E85D0F1A',
        ink: '#F1F5F9',
        inkDim: '#94A3B8',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
