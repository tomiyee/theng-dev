import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
  { ignores: ['build/**', 'dist/**'] },
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,

      // TypeScript handles undefined-variable checking; no-undef produces false positives
      'no-undef': 'off',

      // Highly Recommended
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-shadow': ['error', { allow: ['_'] }],
      camelcase: ['error', { ignoreImports: true }],
      'consistent-return': 'error',
      'dot-notation': 'error',
      eqeqeq: 'error',
      'max-classes-per-file': 'error',
      'max-lines': 'off',
      'max-lines-per-function': 'off',
      'no-bitwise': 'error',
      'no-throw-literal': 'error',
      'no-duplicate-imports': 'error',
      'no-param-reassign': 'error',
      'no-plusplus': 'off',
      'no-sequences': 'error',
      'no-ternary': 'off',
      'no-undefined': 'off',
      'no-unneeded-ternary': 'error',
      'no-useless-concat': 'error',
      'no-var': 'warn',
      'no-with': 'error',
      radix: 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off',
      yoda: 'error',

      // Style lints Prettier handles
      'array-element-newline': 'off',
      'arrow-body-style': 'off',
      'brace-style': 'off',
      'comma-dangle': 'off',
      'dot-location': 'off',
      'function-call-argument-newline': 'off',
      'function-paren-newline': 'off',
      'implicit-arrow-linebreak': 'off',
      indent: 'off',
      'line-comment-position': 'off',
      'lines-around-comment': 'off',
      'lines-between-class-members': 'off',
      'max-len': 'off',
      'multiline-ternary': 'off',
      'multiline-comment-style': 'off',
      'newline-per-chained-call': 'off',
      'no-extra-parens': 'off',
      'no-mixed-operators': 'off',
      'no-shadow': 'off',
      'nonblock-statement-body-position': 'off',
      'object-curly-spacing': 'off',
      'object-property-newline': 'off',
      'padded-blocks': 'off',
      quotes: 'off',
      'quote-props': 'off',
      'react/react-in-jsx-scope': 'off',
      'space-before-function-paren': 'off',
      'spaced-comment': 'off',

      // Personally Recommended
      'new-cap': 'off',
      'no-else-return': 'error',
      'object-shorthand': 'error',
      'prefer-destructuring': 'error',
      'prefer-exponentiation-operator': 'error',
      'prefer-object-spread': 'error',
      'prefer-promise-reject-errors': 'error',
      'react/self-closing-comp': 'warn',
      'sort-keys': 'off',
    },
  },
];
