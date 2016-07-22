//变量新的简单定义方式
var [a,b,c] = [1,2,3];
console.log(a+"==="+b+"==="+c);

// var [a, ...b]  =  [1,1,2,3]; // a==1 b=[1,2,3]

// var str = 'hello';
// var strChar = [...str]; // [h,e,l,l,o]

// 变量的作用域
// var arr = [];
// for(var i=0;i<5;i++){
// 	arr[i] = function(i){return i*2}.bind(i);
// };

// console.log(arr[1](1));


// const PI = 3.14;
// console.log(PI);
// PI = 3.2;
// console.log(PI);

// function test(){
// 	console.log(PI);
// 	const PI = 3.14;
// };

// test();

// if(true){
// 	let a = 100;
// 	console.log(a);
// }

//函数的作用域
// {
// 	function test(){console.log(1)};
// 	test();
// 	{
// 		function test(){console.log(2)};
// 		test();
// 	}
// }

