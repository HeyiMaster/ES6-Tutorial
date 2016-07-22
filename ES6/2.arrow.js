//箭头函数
var arr = [0,1,2,3];

// var arr2 = [];
// arr.forEach(function(e){
// 	arr2.push(e*2);
// });
// arr.forEach(e => {arr2.push(e*2)});


var arr2 = arr.map(e => e*2);

console.log(arr2);

function add(x,y){
	return x+y;
};

var num = (x,y,z) => (1+2)*3;

((x,y,z) => {console.log(1+"==="+2+"===="+3)})()
console.log(num());



