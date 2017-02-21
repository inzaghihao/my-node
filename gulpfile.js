var gulp = require("gulp");
var concat = require("gulp-concat");
var gulify = require("gulp-uglify");

gulp.task("concat",function(){
	gulp.src(["1.js","2.js"])
		.pipe(concat("main.js"))
		.pipe(gulify())
		.pipe(gulp.dest("build"));
})

var webpack = require("webpack");
var gulp_webpack = require("gulp-webpack");
var webpack_config = require("./webpack.config.js");
gulp.task("hao",function(){
	gulp.src("hao.js")
		.pipe(gulp_webpack(webpack_config,webpack))
		.pipe(gulify())
		.pipe(gulp.dest("build/js"));
})

var gulp_tpl = require("gulp-template");
gulp.task("page",function(){
	gulp.src("./page.html")
		.pipe(gulp_tpl({
			"name":"hao"
		}))
		.pipe(gulp.dest("build/html"));
})


gulp.task("build-js",function(){
	gulp_webpack(webpack_config,webpack)
		.pipe(gulp.dest("build/js"));
})

gulp.task("config",function(){
	var fs = require("fs");
	var root = "./src/modules/";
	var config = {};
	var get_m = fs.readdirSync(root);
	get_m.forEach(function(m){
		var get_m_files = fs.readdirSync(root+m);
		var getRet = get_m_files.map(function(jsfile){
			return root+m+"/"+jsfile;
		})
		config[m] = getRet;
	})

	webpack_config.entry = config;
})

gulp.task("run",["config"],function(){
	webpack(webpack_config,function(err,status){
		//...gulp
	})
	// gulp.src("./src/tpl/login.html")
	// 	.pipe(gulp.dest("build/html"));
})

