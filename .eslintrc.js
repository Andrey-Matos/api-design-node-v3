module.exports = {
  parserOptions: {
    sourceType: 'module'
  },
  parser: 'babel-eslint',
  env: {
    node: true
  },
  extends: [
    'standard',
    'plugin:jest/recommended'
  ],
  plugins: ['jest'],
  rules: {
    'promise/catch-or-return': 'error',
    "no-multi-spaces": 0,
  }
}
