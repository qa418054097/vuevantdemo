// const path = require('path')
// const resolve = dir => path.join(__dirname, dir)

module.exports = {
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
  }
  // chainWebpack: config => {
  //   // 配置全局Sass样式
  //   const oneOfsMap = config.module.rule('scss').oneOfs.store
  //   oneOfsMap.forEach(item => {
  //     item
  //       .use('sass-resources-loader')
  //       .loader('sass-resources-loader')
  //       .options({
  //         // Provide path to the file with resources
  //         // Or array of paths
  //         resources: ['./src/variables.scss']
  //       })
  //       .end()
  //   })
  // }

}
