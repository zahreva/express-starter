module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    'global-require': 0,

    'prettier/prettier': 'error'
  }
};
