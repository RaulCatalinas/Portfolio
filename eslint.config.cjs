const astro = require('eslint-plugin-astro')
const jsxA11y = require('eslint-plugin-jsx-a11y')
const prettier = require('eslint-plugin-prettier/recommended')
const eslintConfigPrettier = require('eslint-config-prettier/flat')
const reactHooks = require('eslint-plugin-react-hooks')

module.exports = (async function config() {
  const { default: love } = await import('eslint-config-love')

  return [
    ...astro.configs['flat/recommended'],
    eslintConfigPrettier,
    prettier,

    {
      ignores: [
        'node_modules',
        '.astro',
        '.github',
        '.husky',
        '.vscode',
        'public',
        'dist',
        'build'
      ]
    },
    {
      ...love,
      files: ['**/*.ts', '**/*.tsx']
    },
    {
      ...reactHooks.configs.flat['recommended-latest'],
      files: ['**/*.txs']
    },
    {
      files: ['**/*.astro'],
      rules: {
        'astro/no-set-html-directive': 'error'
      }
    },

    {
      plugins: {
        'jsx-a11y': jsxA11y.flatConfigs.strict
      },
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          }
        }
      },
      files: ['**/*.{ts,tsx,astro}'],
      rules: {
        '@typescript-eslint/space-before-function-paren': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        'prefer-destructuring': 'off',
        'no-console': 'off',
        'prettier/prettier': 'error'
      }
    }
  ]
})()
