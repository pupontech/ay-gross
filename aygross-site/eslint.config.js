import eslintPluginAstro from "eslint-plugin-astro";
import tsParser from "@typescript-eslint/parser";

export default [
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs["jsx-a11y-recommended"],
  {
    files: ["**/*.astro"],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
      },
    },
    rules: {
      "astro/no-unused-define-vars-in-style": "error",
      "astro/valid-compile": "error",
    },
  },
  {
    files: ["**/*.{js,mjs,ts}"],
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      "no-console": "warn",
      "no-debugger": "error",
    },
  },
];
