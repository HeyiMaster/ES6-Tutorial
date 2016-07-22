//给定默认参数

// function test(x,y,z){
// 	if(y == undefined) y=0;
// 	if(z == undefined) z=0;
// 	return (x+y+z);
// };

// function test(x, y = 0 , z = 0 ){
// 	return (x+y+z);
// }

// var total = test(1,2);
// console.log(total);

//可变参数
// function test(x, ...params){
// 	console.log(params);
// };

// test(1,2);
"use strict";

var str = "hello";
var strs = [...str, 'what'];
console.log(strs);

//# sourceMappingURL=3.ExtendedParams-compiled.js.map