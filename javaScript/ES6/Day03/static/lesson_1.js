/*
    字符串新增方法
*/

// includes 用于检测 是否包含字符串  参数1 ： 要检索的字符串  参数2：开始检索的位置索引
let str = "HelloJkzzk";
let include = str.includes("zzk");
console.log("include",include);

// startsWith() 用于检测 是否以某个字符串开头 参数1 ： 要检索的字符串 参数2：开始检索的位置索引
let start = str.startsWith("Hell");
console.log("start",start);

// endsWith() 用于检测 是否以某个字符串结尾 参数1 ： 要检索的字符串 参数2：开始检索的位置索引
let end = str.endsWith("zzk");
console.log("end",end);

// repeat() 重复字符串, 参数为次数，并返回新的字符串
let repeat = str.repeat(3);
console.log("repeat",repeat);

// padStart() 从字符串左面添加字符 参数1 指定生成字符串的长度  参数2 添加的字符串 默认为空格
// padEnd()   从字符串右面添加字符 参数1 指定生成字符串的长度  参数2 添加的字符串 默认为空格
// 注意 ： 如果指定的长度小于了原字符串长度，那么返回元字符串
let padStart = str.padStart(15,"d");
console.log("padStart",padStart);
let padEnd = str.padEnd(15,"d");
console.log("padEnd",padEnd);

/*
    模板字符串
        使用反引号 ` 包括起来的字符串，其中可以加入表达式，特殊字符，可以多行显示
*/

// 普通用法
let superStr = `Hello\nWorld`;
console.log(superStr);
// 多行字符串
superStr =  `Hey,
can you stop angry now?`;
console.log(superStr);
// 插入变量 与 调用函数
let name = "organed";
let age = 12;
superStr = `My name is ${name},age is ${age}`;
console.log("superStr",superStr);
function getSex() {
    return "男";
}
superStr = `My sex is ${getSex()}`;
console.log("superStr",superStr);
