module.exports = {
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  extends: ['airbnb'],
  plugins: ['vue'],
  rules: {
    semi: 'off',
    // indent: ['error', 2, {'SwitchCase': 1}],
    // 'import/no-unresolved': 'off',
    // 'import/extensions': [2, {'js': 'never'}],
    // 'import/prefer-default-export': 'off',
    // 'no-underscore-dangle': [0],
    // 'no-param-reassign': ['error', { props: false }],
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  }
}
