// const path = require('path')
// const resolve = dir => path.join(__dirname, dir)
const webpack = require('webpack')
module.exports = {
  //基本路径
  publicPath: './',
  //输出文件目录
  outputDir: '../cordova-app/www',
  productionSourceMap:false, //不生成map
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({ // 把px单位换算成rem单位
            rootValue: 37.5, // vant官方使用的是37.5
            selectorBlackList: ['vant', 'mu'], // 忽略转换正则匹配项
            propList: ['*']
          })
        ]
      }
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery'
      })
    ]
  }


}
