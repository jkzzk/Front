/*
*   Symbol
*   ES6新增一种原始数据类型
*   Number String Boolean Null Undefined
*       1.不能用new关键字创建
*       2.参数是对于Symbol变量的描述，不是具体的值
*       3.每次生成都是唯一的，不会重复
* */
let id_0 = Symbol("id");
console.log("id_0",id_0);
let id_1 = Symbol("id");
console.log("id_1",id_1);
console.log("id_1 == id_0",id_1 == id_0);

/*
* 作为对象的键
* */
let key = Symbol();
let obj = {};
// 直接赋值 不能使用 . 运算符
obj[key] = "value";
console.log("obj",obj);
// 字面值写法
obj = {
    [key] : "value"
};
console.log("obj",obj);
// 使用Object.defineProperty方法
obj = Object.defineProperties(obj,key,{value : "value"});
console.log("obj",obj);
// 读取symbol属性 不能使用.运算符，会返回undefined
console.log("key",obj[key]);
console.log("key",obj.key);

/*
*  symbol 不能使用 for in 与 for of 方法遍历得到
*  也不能使用Object.keys()与Object.getOwnPropertyNames() 方法获取
*  但是可以使用Object.getOwnPropertySymbols()方法获取该类型数据
* */
for(let item in obj) {
    console.log("item_for_in",item);
}
console.log("Object.keys()",Object.keys(obj));
console.log("Object.getOwnPropertyNames()",Object.getOwnPropertyNames(obj));
console.log("Object.getOwnPropertySymbols()",Object.getOwnPropertySymbols(obj));

/*
* Symbol与其他原始数据类型的转换
* */

// 转换为String字符串
let symbol_string = String(Symbol());
console.log("symbol_string",symbol_string);
// symbol_string = Symbol() + "";  报错
// 转换为Number数字类型
// let symbol_number = Number(Symbol());  报错 不能进行转换
// let symbol_number = Symbol() + 0; 报错 不能进行转换
// 转换为Boolean布尔类型
let symbol_boolean = Boolean(Symbol());
console.log("symbol_boolean",symbol_boolean);  // true
symbol_boolean = !!Symbol();
console.log("symbol_boolean",symbol_boolean);  // true


/*
* 注册与获取全局Symbol
*      Symbol.for()
* 参数为Symbol的描述，从全局中根据参数获取注册的Symbol值，如果没有就创建一个并返回
* 该全局是可以跨域
*      Symbol.keyFor()
* 参数为全局Symbol数据，返回该数据的 描述值
* */
let id = Symbol.for("id");
console.log("id_symbol",id);
let symbol_for = Symbol.keyFor(id);
console.log("symbol_for",symbol_for);
