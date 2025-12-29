const astro = require('eslint-plugin-astro')
const jsxA11y = require('eslint-plugin-jsx-a11y')
const prettier = require('eslint-plugin-prettier/recommended')

module.exports = (async function config() {
  const { default: love } = await import('eslint-config-love')

  return [
    ...astro.configs['flat/recommended'],
    prettier,

    {
      ...love,
      files: ['**/*.ts', '**/*.tsx']
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
        'prettier/prettier': ['error', { singleQuote: true }]
      }
    }
  ]
})()
