//Symbol 就是解决对象中命名冲突的问题
// 也就是说 symbol类似于字符串 可以作为对象的属性名

// console.log(Symbol('foo') !== Symbol('foo')); //true
// console.log(Symbol() != Symbol());  //true
// console.log(typeof Symbol());  // symbol
// var sym = Symbol('sym');
// console.log('my name is '+sym.toString()); //symbol 转字符串
// console.log(Boolean(sym));	// symbol 转Boolean


// console.log(String(num)+10);

// 以下示例证明了 symbol作为属性值的一些操作
// var name = Symbol('name');
// let fn = Symbol('fn');
// var Person = {
// 	name : 'flanazhong',
// 	// fn : function(){
// 	// 	console.log(this.name);
// 	// }
// 	fn(){
// 		console.log(this.name);
// 	}
// }

// Person.fn();

// 运用于属性名的遍历
// var name = Symbol('name');
// var age = Symbol('age');
var obj = {
	name : 'flanazhong',
	age : 21
};
console.log(Object.getOwnPropertyNamesSymbol(obj));
