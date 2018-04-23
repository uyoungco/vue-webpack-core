const path = require('path')
const createVueLoaderOptions = require('./vue-loader.config')

const isDev = process.env.NODE_ENV === 'development'

const config = {
	target: 'web', // 指定是web平台
	entry: path.join(__dirname, '../client/index.js'),	// 入口文件
	output: {
		filename: 'bundle.[hash:8].js',
		path: path.join(__dirname, '../dist')
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: createVueLoaderOptions(isDev)
			},
			{
				test: /\.jsx$/,
				loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
			},
			{
				test: /\.(gif|jpg|jpeg|png|svg)$/,
				use: [
					{
						loader: 'url-loader', // url-loader 用于吧图片一直转换层base64
						options: {
							limit: 1024,
							name: 'resources/[path][name].[hash:8].[ext]'
						}
					}
				]
			}
		]
	}
}

module.exports = config