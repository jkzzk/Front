// 1.let关键字 块级作用域
{
    let a = 10;
    console.log("a",a);
}

// console.log("a",a);

var b = 10;
let c = 9;

console.log("b",b);
console.log("c",c);
console.log("b",window.b);
console.log("c",window.c); // 用let定义的变量不会用window全局作用域对象访问不到  undefined

var b = 20;
console.log("b",b);
//let c = 22;
//console.log("c",c); // let定义的变量不能被重新定义，报错：Identifier 'c' has already been declared

// let定义的变量不会进行变量提升

// 2.const 定义常量

const a = 10;
console.log("a",a);
//a = 10; // 常量不能重新赋值 Assignment to constant variable. 报错

//const d;  //Missing initializer in const declaration 报错 ， 不能先声明在赋值
//d = 20;
//console.log("d",d);