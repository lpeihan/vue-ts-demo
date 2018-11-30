module.exports = {
    root: true,
    parserOptions: {
      parser: 'typescript-eslint-parser'
    },
    env: {
      browser: true
    },
    extends: ['standard', 'plugin:vue/essential'],
    plugins: ['typescript'],
    rules: {
      semi: ['error', 'always'],
      'space-before-function-paren': ['error', 'never']
    }
  };
  