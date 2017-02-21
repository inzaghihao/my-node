/**
 * Created by Administrator on 2016/8/4.
 */


require("./css/user.css");

require("./lib/jquery.validate.min.js");
require("./lib/jquery.formInputLetter.js");


$.validator.setDefaults({
    submitHandler: function() {
        alert("验证通过!");
    }
});
$(document).ready(function() {
    $("#txtUserLogin").formInputLetter({
        len : 10,//限制输入的字符个数
        showId : "lenMsg"//显示剩余字符文本标签的ID
    });
    $("#userfrm").validate();
});
