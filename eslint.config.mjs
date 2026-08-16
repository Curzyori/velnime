// ESLint 9 flat config — pakai ini (ganti .eslintrc.json legacy).
// extends next/core-web-vitals + next/typescript + react-hooks recommended.
import reactHooks from 'eslint-plugin-react-hooks';

// next configs masih legacy-format ({extends}) — resolve manual ke flat config v9.
import { FlatCompat } from '@eslint/eslintrc';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({ baseDirectory: __dirname });

const config = [
  {
    ignores: ['.next/**', 'node_modules/**', 'out/**', 'next-env.d.ts'],
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: { 'react-hooks': reactHooks },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
];

export default config;