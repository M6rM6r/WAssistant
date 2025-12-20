// ═══════════════════════════════════════════════════════════════════════════════
// ESLINT CONFIG (INTJ/OCPD: Flat Config - Modern & Efficient)
// ═══════════════════════════════════════════════════════════════════════════════
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
  js.configs.recommended,
  prettier,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2022,
      },
    },
    files: ['web/**/*.js'],
    rules: {
      // ─────────────────────────────────────────────────────────────────────
      // ERRORS
      // ─────────────────────────────────────────────────────────────────────
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-undef': 'error',
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
      eqeqeq: ['error', 'always'],
      'no-var': 'error',
      'prefer-const': 'error',

      // ─────────────────────────────────────────────────────────────────────
      // STYLE (handled by Prettier, but enforce some basics)
      // ─────────────────────────────────────────────────────────────────────
      'no-multiple-empty-lines': ['error', { max: 2 }],
      'no-trailing-spaces': 'error',
    },
  },
  {
    ignores: ['node_modules/**', 'build/**', '.dart_tool/**', 'coverage/**'],
  },
];
