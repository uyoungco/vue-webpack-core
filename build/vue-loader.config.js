module.exports = (isDev) => {
  return {
    preserveWhitepace: true,   // 去掉模板里的空格
    extractCSS: !isDev, // 让vue里的css打包
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true  //  吧css里的-命名方式 改写生成驼峰命名方式
    }
    // postcss  在外边已经声明了
    // hotReload: false //根据环境变量生成
  }
}