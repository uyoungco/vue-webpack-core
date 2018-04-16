const autoprefixer = require('autoprefixer')

// postcss 后处理css   优化css代码

module.exports = {
  plugins: [
    autoprefixer() // 这个方法用于给css加浏览器前缀
  ]
}