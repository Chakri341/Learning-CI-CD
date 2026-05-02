import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.js"],
    
    ...js.configs.recommended,

    languageOptions: {
      globals: globals.node,
    },

    rules: {
      semi: ["error", "always"],        // require ;
      indent: ["error", 2],             // 2-space indent
      "no-unused-vars": "error",        // unused variables
      "no-undef": "error",              // undefined variables
    },
  },
]);