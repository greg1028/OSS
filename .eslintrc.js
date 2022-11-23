module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off', // console 가능하게
    'linebreak-style': 'off',
    'no-restricted-globals': 'off', // isNaN 가능하게
    'import/no-unresolved': 'off',
    'no-undef': 'off', // 정의하지 않은 함수 사용 가능
    'no-plusplus': 'off', // ++ 가능
  },
};
