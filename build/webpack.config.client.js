const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.config.base')

const isDev = process.env.NODE_ENV === 'development'

const defaultPluins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: isDev ? '"development"' : '"production"'
    }
  }),
  new HTMLPlugin()
]

const devServer = {
  port: 8000,
  host: '0.0.0.0',
  overlay: {
    errors: true // 编译过程中发生错误直接显示在网页上
  },
  hot: true // 无刷新
  // historyFallback: {

  // }
  // open: true // 启动webpack时打开默认浏览器
}

let config

// 根据环境设置
if (isDev) {
  config = merge(baseConfig, {
    devtool: '#cheap-module-eval-source-map', // webpack4默认执行这个 如果需要自行其他的在添加
    module: {
      rules: [
        {
          test: /\.styl$/,
          use: [
            'vue-style-loader',
            'css-loader',
            // {
            //   loader: 'css-loader',  // 这个对象是  让引入的CSS 也使用CSS Modules
            //   options: {
            //     module: true,
            //     localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
            //   }
            // },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            'stylus-loader'
          ]
        }
      ]
    },
    devServer,
    plugins: defaultPluins.concat([
      new webpack.HotModuleReplacementPlugin()
      // new webpack.NoEmitOnErrorsPlugin()
    ])
  })
} else {
  config = merge(baseConfig, {
    entry: {
      app: path.join(__dirname, '../client/index.js') // 入口文件
      // vendor: ['vue'] // 单独打包Vue框架  进行长缓存
    },
    output: {
      filename: '[name].[chunkhash:8].js'
    },
    module: {
      rules: [
        {
          test: /\.styl$/,
          use: ExtractPlugin.extract({
            fallback: 'vue-style-loader',
            use: [
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              'stylus-loader'
            ]
          })
        }
      ]
    },
    optimization: { // 这个方法同等于下面的CommonsChunkPlugin
      splitChunks: {
        chunks: 'all'
      },
      runtimeChunk: true // 同等于 name: 'runtime'
    },
    plugins: defaultPluins.concat([
      new ExtractPlugin('styles.[md5:contenthash:hex:20].css') // webpack4.3.0 已经废弃[contenthash]
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'vendor'
      // }),
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'runtime'
      // })
    ])
  })
}

module.exports = config
