module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true
  },
  parser: 'babel-eslint',
  extends: 'eslint:recommended',
  globals: {
    assert: false
  }
};