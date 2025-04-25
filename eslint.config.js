import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';

export default [
  // Base ESLint configuration
  js.configs.recommended,

  // TypeScript configuration
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        React: 'readonly',
        process: 'readonly',
        document: 'readonly',
        HTMLElement: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': ts,
      react: reactPlugin,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json', // Point to your tsconfig.json
        },
      },
    },
    rules: {
      // React-specific rules
      eqeqeq: 'off',
      curly: 'warn',
      // quotes: ["warn", "double"],
      semi: ['error', 'always'],
      quotes: ['error', 'double'],
      'react/react-in-jsx-scope': 'off', // Not needed in React 17+
      'react/jsx-uses-react': 'off', // Not needed in React 17+
      'react/prop-types': 'off', // Not needed with TypeScript

      // TypeScript-specific rules
      '@typescript-eslint/no-unused-vars': 'warn', // Warn on unused variables
      '@typescript-eslint/no-require-imports': 'off',

      // Import rules
      'import/no-unresolved': 'error', // Ensure imports are resolved
      'import/order': [
        // Enforce import order
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
        },
      ],

      // Accessibility rules
      'jsx-a11y/alt-text': 'warn', // Enforce alt text on images
    },
  },

  // React configuration
  {
    files: ['**/*.jsx', '**/*.tsx'],
    rules: {
      'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }], // Allow JSX in .jsx and .tsx files
    },
  },
];
