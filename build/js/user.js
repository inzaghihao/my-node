webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(12);
	module.exports = __webpack_require__(18);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";__webpack_require__(13);// require("./lib/jquery.validate.min.js");
	// require("./lib/jquery.formInputLetter.js");
	// var getFooter = require("raw!./../../tpl/footer.include");
	$.validator.setDefaults({submitHandler:function submitHandler(){alert("验证通过");}});$(function(){//$("#footer").append(getFooter);
	$("#userfrm").validate();$("#txtUserLogin").formInputLetter({len:10,showId:"lenMeg"});});var jtthink=__webpack_require__(15);var userEntity=new jtthink.UserEntity();//实例化实体类
	userEntity.UserName="haohaha";userEntity.UserPwd="123456A";//console.log(userEntity);		//输出的是赋值过后的实例对象
	var userService=new jtthink.UserService(userEntity);//将实体类的实例对象传到业务类构造函数里
	console.log(userService._UserName);//输出合并之后传来的属性值
	// $("#cmdLogin").click(function(){
	// 	alert("login");
	// })
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 14 */,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";var UserService=__webpack_require__(16);//导入模块
	var UserEntity=__webpack_require__(17);exports.UserService=UserService;//对外导出
	exports.UserEntity=UserEntity;

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var UserService=function(){function UserService(userEntity){_classCallCheck(this,UserService);Object.assign(this,userEntity);//将传过来的实体参数合并到this对象中
	}_createClass(UserService,[{key:"getVersion",value:function getVersion(){console.log("v1.0");}}]);return UserService;}();module.exports=UserService;

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var UserEntity=function(){function UserEntity(){_classCallCheck(this,UserEntity);}_createClass(UserEntity,[{key:"UserName",//导出类
	get:function get(){return this._UserName;},set:function set(v){//直接在set 做判断
	this._UserName=/^[a-zA-Z]{5,19}$/.test(v)?v:null;}},{key:"UserPwd",get:function get(){return this._UserPwd;},set:function set(v){if(/^[a-zA-Z0-9]{6,20}$/.test(v)&&/[A-Z]+/.test(v)){this._UserPwd=v;}else{this._UserPwd=null;}}}]);return UserEntity;}();module.exports=UserEntity;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";$("#cmdReg").click(function(){alert("zhuce");});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }
]);