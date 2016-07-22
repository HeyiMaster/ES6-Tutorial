// 以数组的形式声明

var list = [1,2,3];
// var [a,,b] = list;
// console.log(a+"===="+b);
var [a=11,b=22,c=33,d=44,e] = list;
console.log(a,b,c,d,e);

//对象形式的匹配声明
// var flanazhong = {
// 	name : "flanazhong",
// 	age : 21,
// 	sex : "man"
// }
// var {name,age,sex} = flanazhong;
// console.log(age)

//对象的深度匹配声明
// var flanazhong = {
// 	des : {
// 		name : "flanazhong"
// 	},
// 	say(){
// 		console.log("Hello ...");
// 	}
// };

// var {des : {name:cname},say} = flanazhong; //这里体现了深度匹配
// console.log(cname);
// say()


//函数中参数值的自动匹配
// function a([one,two]){
// 	console.log(one,two);
// };
// function b({name:n,age:a}){
// 	console.log(n,a);
// };
// function c({name,age}){
// 	console.log(name,age);
// };
// a([1,2]);
// b({name:'flanazhong',age:21});
// c({name:'xiaoming',age:20});
