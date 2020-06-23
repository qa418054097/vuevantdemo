module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "no-multiple-empty-lines": [1, {"max": 2}],//空行最多不能超过2行
    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],//当 tab 是为了对齐，允许混合使用空格和 tab。
    "indent": [0,4] //tab键4个空格
  }
}
