/**
 * Created by Administrator on 2016/7/12.
 */
"use strict";
function* generatorFn(){
    yield 'hello';
    console.log("I think that is good");
    yield 'world';
};

let generator = generatorFn();
console.log(generator.next().value);
console.log(generator.next().value);

//let str = 'Walker-Lee';
//let chars = [...str];
//"use stict";
//function* charAt(){
//    for(let key of chars){
//        yield key;
//    }
//}
//
//let charDemo = charAt();
//while (charDemo.next().value){
//    console.log(charDemo.next().value);
//}
//console.log(typeof charDemo.next());