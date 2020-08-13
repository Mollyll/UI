const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
const isDev = process.env.NODE_ENV === "development" ? true : false;
const VueLoaderConfig = require('./vue-loader.config.js')(isDev);

module.exports = {
	entry: path.join(__dirname, '../examples/index.js'),
	output: {
		path: path.join(__dirname, '../dist'),
		filename: "assets/js/[name].bundle.js"
	},
	module: {
		rules: [{
			test: /\.vue$/,
			loader: 'vue-loader',
			options: VueLoaderConfig
		}, {
			test: /\.html$/,
			use: {
				loader: "html-loader",
				options: {
					attrs: ["img:src", 'video:src']
				}
			}
		}, {
			test: /\.mp4$/,
			use: {
				loader: "url-loader",
				options: {
					esModule: false
				}
			}
		}, {
			test: /\.tsx?$/,
			use: "ts-loader"
		}, {
            test:/\.(woff|woff2|ttf|eot)$/,
            use: [{
                loader:'url-loader',
                options: {
					limit: 1024,
					name: 'assets/fonts/[name][hash:8].[ext]'
                }
            }]
        }, {
            test: /\.md$/,
            use: [
                {
                    loader: 'vue-loader',
                    options: {
                        compilerOptions: {
                            preserveWhitespace: false
                        }
                    }
                },
                {
                    loader: path.resolve(__dirname, './md-loader/index.js')
                }
            ]
        }/* , {
            test: /\.md$/,
            loader: 'vue-markdown-loader'
        } */]
	},
	plugins: [
		new VueLoaderPlugin()
	]
}