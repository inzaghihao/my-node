var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports={
	// entry:[
	// 	"./src/main.js",
	// 	"./src/login.js",
	// 	"./src/reg.js"
	// ],
	entry:{
		// "main":"./src/main.js",
		// "user":["./src/login.js","./src/reg.js"],
		// "index":"./src/index.js",
		// "jq_plugins":["./src/lib/jquery.formInputLetter.js","./src/lib/jquery.validate.min.js"]
	},
	output:{
		path:__dirname+"/build/js",
		filename:"[name].js"
	},
	externals:{
		jquery:"$"
	},
	module:{
		loaders:[
			// {test:/\.css$/,loader:"style!css"}
			{test:/\.css$/,loader:ExtractTextPlugin.extract("style","css")},
			{test:/\.js/,loader:"babel",query:{compact:true}}			//compact 去除警告，去除（压缩）多余的空格和结束符
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			filename:__dirname+"/build/html/login.html",
			template:__dirname+"/src/tpl/login.html",
			inject:"body",
			hash:true,
			chunks:["main","user","common","jq_plugins"],
			include:{
				footer:require("fs").readFileSync("./src/tpl/footer.include"),
				title:"我是title"
			}
		}),
		new HtmlWebpackPlugin({
			filename:__dirname+"/build/html/index.html",
			template:__dirname+"/src/tpl/index.html",
			inject:"body",
			hash:true,
			chunks:["main","index","common"]
		}),
		new webpack.ProvidePlugin({
			$:"jquery"
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name:"common",
			chunks:["main","user","index"]
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name:"jq_plugins",
			filename:"jqp.js"
		}),
		new ExtractTextPlugin("[name].css")
	]
}
