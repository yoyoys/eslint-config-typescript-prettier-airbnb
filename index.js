module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
  },
  extends: [
    'airbnb-typescript/base',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  plugins: ['eslint-plugin-prettier'],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-debugger': 'warn',
    'import/prefer-default-export': 'off',
    'prettier/prettier': ['error', {
      printWidth: 100,
      singleQuote: true,
      trailingComma: 'all',
    }],
    'no-useless-constructor': 'off',
    // provide by prettier
    'semi': 'off',
    'arrow-parens': 'off',
    'object-curly-spacing': 'off',
    'object-curly-newline': 'off',
    'comma-dangle': 'off',
    'implicit-arrow-linebreak': 'off',
    'indent': 'off',
    'space-before-blocks': 'off',

    // additional config
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/explicit-member-accessibility': ['warn', { accessibility: 'explicit' }],
    '@typescript-eslint/no-extra-non-null-assertion': ['error'],
    '@typescript-eslint/no-extraneous-class': ['error', { allowWithDecorator: true }],
    '@typescript-eslint/promise-function-async': ['error'],
    '@typescript-eslint/require-array-sort-compare': ['warn'],
    '@typescript-eslint/restrict-plus-operands': ['error'],
    '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
    '@typescript-eslint/switch-exhaustiveness-check': ['warn'],
    '@typescript-eslint/no-unnecessary-condition': ['error', { ignoreRhs: true }],
    '@typescript-eslint/no-floating-promises': ['error'],
    '@typescript-eslint/class-name-casing': ['error'],

    // not ideal for prototype
    '@typescript-eslint/no-explicit-any': ['off'],
    'max-classes-per-file': 'off',

  },
  parserOptions: {
    sourceType: 'module',
  },
  settings: {
    "import/resolver": {
      "typescript": {},
    },
  },
  parserOptions: {
    project: ['./tsconfig.json'],
  },
};
