// @ts-check

// import lichthagel from '@lichthagel/eslint-config'
import antfu from '@antfu/eslint-config'

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  // ...await lichthagel({}),
  ...await antfu({

  }),
  {
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
  },
  {
    ignores: ['node_modules', 'dist', '.pnpm-store'],
  },
]
