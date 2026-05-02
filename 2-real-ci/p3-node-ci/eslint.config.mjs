import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.node, // 👈 FIX (not browser)
    },
    rules: {
      semi: ["error", "always"],           // 👈 enforce ;
      indent: ["error", 2],                // 👈 proper spacing
      "no-unused-vars": "error",           // 👈 unused variable
      "no-undef": "error",                 // 👈 undefined variable
    },
  },

  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" },
  },
]);