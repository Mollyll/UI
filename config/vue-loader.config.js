module.exports = function (isDev) {
	return {
	    preserveWhitespace: true,
	    extractCSS: !isDev, // 只有在正式环境的时候，才需要打包css
	    cssModules: { // 给css类名添加名字
	        localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]', // 在正式环境下，为了保密性，可以将path和name去掉，只留下hash
	        camelCase: true // 驼峰命名法
	    },
	    hotReload: isDev ? true : false // 根据环境变量生成
	}
}