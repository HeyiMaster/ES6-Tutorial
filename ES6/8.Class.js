//对象的定义
class Person{
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	sayHello(){
		console.log("my name is "+this.name+", I am "+this.age+" years old");
	}
	// get message(){
	// 	console.log("haha");
	// }
}

//这两个对象是做多继承用
class Member {
	initializer(){this.name = "xiaozhong"}
}
class SuperMember{
	initializer(){this.age = 23}
}

var Man = new Person("flanazhong",21);
Man.sayHello();

//对象的继承
// class Man extends Person{
// 	constructor(name,age,hobby){
// 		super(name,age);
// 		this.hobby = hobby;
// 	}
// 	sayHello(){
// 		super.sayHello();
// 		console.log("I am human , but I have the same method");
// 	}
// 	static toString(){
// 		console.log("this is my static method");
// 	}
// }

// let Human = new Man("xiaozhong",34,"game");
// Man.toString();   //这是类方法
// Human.sayHello(); //这是对象的方法

//自己封装一个对象混入的函数， 返回结果对象 然后进行继承
// class Flanazhong extends aggregation(Person,Member,SuperMember){}
// var flan = new Flanazhong("zhongzhong",34);
// flan.sayHello();

//类似于Java中的 getter setter方法  如Person 中的message
// get message(){
// 		console.log("haha");
// }
// Man.message;