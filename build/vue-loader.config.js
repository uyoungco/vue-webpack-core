module.exports = (isDev) => {
  return {
    preserveWhitepace: true,   // 去掉模板里的空格
    extractCSS: !isDev, // 让vue里的css打包
    cssModules: {}
    // postcss  在外边已经声明了
    // hotReload: false //根据环境变量生成
    
  }
}