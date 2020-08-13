const merge = require('webpack-merge');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const isDev = process.env.NODE_ENV === "development" ? true : false;
const baseConfig = require('./webpack-ui.config.base.js');

let config;

if (isDev) {
	config = merge(baseConfig, {
        mode: process.env.NODE_ENV,
		devServer: {
			host: "127.0.0.1",
			port: 8001,
			overlay: {
				errors: true,
			},
			hot: true
		},
		module: {
			rules: [{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					}
				]
			}, {
				test: /\.less$/,
				use: [
					"style-loader", 
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					}, 
					'less-loader'
				]
			}, {
				test: /\.(png|jpg|jpeg|gif|svg)/,
				// loader 从后往前执行
				use: [{
					loader: "url-loader",
					options: {
						name: "[name].[hash:4].[ext]",
						outputPath: "assets/img",
						publicPath: "assets/img",
						limit: 5000,
						esModule: false,
					}
				}]
			}, {
				test: /\.js$/,
				// npm i @babel/polyfill -D
				// npm i @babel/plugin-transform-runtime @babel/runtime -D
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true
					}
				},	
				include: [
                    path.resolve(__dirname, '../examples/'),
                    path.resolve(__dirname, '../test/'),
                    path.resolve(__dirname, '../packages/')
				],
				exclude: /node_modules/
			}]
		},
        plugins: [
            new htmlWebpackPlugin({
				filename: "index.html",
				template: path.join(__dirname, './template.html'),
				favicon: path.join(__dirname, '../favicon.ico')
			})
		]
	})
} else {
	config = merge(baseConfig, {
		mode: process.env.NODE_ENV,
		output: {
			// publicPath: "/"
		},
		optimization: {
			splitChunks: {
				name: true,
				chunks: "initial",
				minSize: 5000,
				automaticNameDelimiter: '.',
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name: "vendor",
						priority: -10
					},
					jquery: {
						test: /jquery/,
						name: "jquery",
						priority: 10
					}
				}
			},
			runtimeChunk: {
				name: "runtime"
			}
		},
		module: {
			rules: [{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [{
						loader: "css-loader"
					}, {
						loader: "postcss-loader"
					}]
				})
			}, {
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [{
						loader: "css-loader"
					}, {
						loader: "postcss-loader"
					}, {
						loader: "less-loader"
					}]
				})
			}, {
				test: /\.(png|jpg|jpeg|gif|svg)/,
				// loader 从后往前执行
				use: [{
					loader: "url-loader",
					options: {
						name: "[name].[hash:4].[ext]",
						outputPath: "assets/img",
						publicPath: "assets/img",
						limit: 5000,
						esModule: false,
					}
				}, {
					loader: 'img-loader',
					options: {
						plugins: [
							require('imagemin-pngquant')({
								speed: 2 //1-11
							}),
							require('imagemin-mozjpeg')({
								quality: 80 //1-100
							}),
							require('imagemin-gifsicle')({
								optimizationLevel: 1 //1,2,3
							})
						]
					}
				}]
			}, {
				test: /\.js$/,
				use: {
					loader: 'babel-loader'
				},
				include: [
					path.resolve(__dirname, '../examples/'),
                    path.resolve(__dirname, '../test/'),
                    path.resolve(__dirname, '../packages/')
				],
				exclude: /node_modules/
			}]
		},
		plugins: [
			new ExtractTextPlugin({
				filename: 'assets/style/[name].min.css'
			}),
			new htmlWebpackPlugin({
				filename: "index.html",
				template: path.join(__dirname, './template.html'),
				favicon: path.join(__dirname, '../favicon.ico')
			})
		]
	})
}

module.exports = config;