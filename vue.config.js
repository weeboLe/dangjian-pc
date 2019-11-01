// // vue.config.js
module.exports = {
  //   assetsDir: 'static',//所有引入文件将放入static
  //   publicPath: './',
  //   productionSourceMap: false,//隐藏源码
  //   css: {
  //     loaderOptions: {
  //       sass: {
  //         // data: ` @import "@/assets/scss/variable.scss";`
  //       }
  //     }
  //   },
  devServer: {
    proxy: {//配置跨域
      '/dangjian_api': {
        target: 'http://117.34.80.22:8300/TSY/',//这里后台的地址模拟的;应该填写你们真实的后台接口
        ws: true,
        changOrigin: true,//允许跨域
        pathRewrite: {
          '^/dangjian_api': ''//请求的时候使用这个api就可以
        }
      }
    }
  }
  ,
  lintOnSave: false,// eslint 检测
}