module.exports = {
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  extends: ['airbnb'],
  plugins: ['vue'],
  rules: {
    semi: 'off',
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  }
}
