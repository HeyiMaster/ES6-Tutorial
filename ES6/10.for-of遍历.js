// 在ES5 以前 我们遍历一个数组是这样做
// var arr = [1,2,3,4,5];
// for(var i=0;i<arr.length;i++){
// 	console.log(arr[i] *2);
// };

// 在ES5 我们遍历数组可以用 forEach map  filter
// var arr = [1,2,3,4,5];
// arr.forEach(function(e){
// 	console.log(e*2);
// });

// 以上代码利用 ES6 可以这样稍稍简化
// var arr = [1,2,3,4,5];
// arr.forEach((e) => console.log(e*2));

// 但是 以上代码还是有缺点，如果要跳出循环 很麻烦 就像这样
// for循环代码如下：
// var arr = [1,2,3,4,5,6];
// for(var i =0;i<arr.length;i++){
// 	if(i == 3) break;  // continue
// 	console.log(arr[i]);
// }
// 如果用ES5 解决
// arr.forEach(function(e){
// 	if(e == 3) break  //直接报错 Illegal brek statement
// });

// 当然 此时会想到 for in循环 只不过 key是 String拼接会出现问题
// 因此 在ES6中引入了 for-of 循环
// var arr = [1,2,3,4,5];
// for(var index of arr){
// 	if(index ==3) break // ok 大功告成 解决了这个问题
// 	console.log(index);
// };


// 字符串的遍历也是一样  以下是ES6中的特殊定义方式
// var str = "hello,world";
// var [,chars] = str;
// console.log(chars);
// var str = "hello,world";
// for(var i=0;i<str.length;i++){
// 	console.log(str[i]);
// }

// var str = "hello.world";
// for(var char of str){
// 	console.log(char);
// }
