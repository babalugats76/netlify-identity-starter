// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  {
    ignores: ['./tsconfig.js', '**/node_modules/', '**/.nuxt/', '**/.output/', '**/retired/', '**/content/'],
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/max-statements-per-line': ['error', { max: 1 }],
      '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 1 }],
      '@stylistic/one-var-declaration-per-line': 'error',
      '@stylistic/semi': ['error', 'always'],
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-empty-object-type': 'off',
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-dupe-keys': 'off',
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'one-var': 'off',
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/max-attributes-per-line': ['error', { singleline: { max: 1 }, multiline: { max: 1 } }],
      'vue/multi-word-component-names': 'off',
      'vue/no-multiple-template-root': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'vue/no-mutating-props': 'off',
      'vue/no-unused-vars': 'warn',
      'vue/no-v-html': 'off',
      'vue/require-default-prop': 'off',
      'vue/valid-template-root': 'off',
    },
  },
);
