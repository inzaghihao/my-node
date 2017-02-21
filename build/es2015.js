"use strict";

var name = "hao",
    age = 10;

var str = name + " \u7684\u5E74\u9F84\u662F" + age;
console.log(str);

var me = function me() {
	var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "zhangsan";

	return {
		showName: function showName() {
			alert(name);
		}
	};
};

var m = me();
m.showName();
