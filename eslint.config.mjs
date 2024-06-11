import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  { languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'double'],
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
      'no-trailing-spaces': ['error', { 'skipBlankLines': true }],
      'max-len': ['error', { 'code': 10 }]
    }
  }
];
