var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack=require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports =
{
    entry:
    {
        "main":'./src/main.js',
        "user":['./src/login.js','./src/reg.js'],
        "index":['./src/index.js'],
        "jq_plugins": ['./src/lib/jquery.validate.min.js','./src/lib/jquery.formInputLetter.js']
    },
    output: {
        path: __dirname+'/build/js',  //输出文件夹
        filename:'[name].js'   //最终打包生成的文件名
    },
    externals: {
        'jquery':'$'   //或者 ‘jquery’:’$’
    },
    module:{
        loaders:[
            //{test:/\.css$/,loader:"style!css"}
            {test:/\.css$/,loader:ExtractTextPlugin.extract("style","css")}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: __dirname+'/build/html/login.html',
            template: __dirname+'/src/tpl/login.html',
            inject:'body',
            hash:true,
            chunks:["main","user","common","jqp"]
        }),
        new HtmlWebpackPlugin({
            filename: __dirname+'/build/html/index.html',
            template: __dirname+'/src/tpl/index.html',
            inject:'body',
            hash:true,
            chunks:["main","index","common"]
        }),
        new webpack.ProvidePlugin({
            $:'jquery'  //这里请确保你的jquery已经安装了。否则要路径引用哦
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:"jqp",  //注意：不需要.js后缀
            chunks:['jq_plugins','user']
        }) ,
        new webpack.optimize.CommonsChunkPlugin({
            names:"common",  //注意：不需要.js后缀
            chunks:["main","index","jqp"], //提取公共部分
        }) ,
        new ExtractTextPlugin("[name].css")



    ]



}
