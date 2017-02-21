
require("../../css/user.css");
// require("./lib/jquery.validate.min.js");
// require("./lib/jquery.formInputLetter.js");

// var getFooter = require("raw!./../../tpl/footer.include");
$.validator.setDefaults({
	submitHandler:function(){
		alert("验证通过");
	}
})
$(function(){
	//$("#footer").append(getFooter);
	$("#userfrm").validate();
	$("#txtUserLogin").formInputLetter({
		len:10,
		showId:"lenMeg"
	});
})

let jtthink = require("jtthink");


let userEntity = new jtthink.UserEntity();			//实例化实体类
userEntity.UserName = "haohaha";			
userEntity.UserPwd = "123456A";
//console.log(userEntity);		//输出的是赋值过后的实例对象

let userService = new jtthink.UserService(userEntity);	//将实体类的实例对象传到业务类构造函数里
console.log(userService._UserName);		//输出合并之后传来的属性值

// $("#cmdLogin").click(function(){
// 	alert("login");
// })