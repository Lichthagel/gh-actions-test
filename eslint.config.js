// @ts-check

import lichthagel from "@lichthagel/eslint-config";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  ...await lichthagel({}),
  {
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
  },
  {
    ignores: ["node_modules", "dist"],
  },
];
