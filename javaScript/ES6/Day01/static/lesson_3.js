var arr = [1,2,3,4,5];

for(var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 不支持 break 与 continue
arr.forEach(function (item) {
        console.log(item);
});

// every 可以模拟出break与continue的效果
arr.every(function (item) {
    console.log(item);

    return true;
});

// for in
for(var item in arr) {
    console.log(item);
}

// ES6  for .. of ..

// 伪数组转换为数组

// 伪数组 ： 以索引的方式存储数据而且具有length属性

// ES5 转换方式
let imgs = [].slice.call(document.querySelectorAll('img')); // 将页面中所有的img元素(NodeList)转换为数组
// ES6 转换方式
let imgs_ES6 = Array.from(document.querySelectorAll('img'));
// API Array.from(伪数组,mapFunc,thisObject)  mapFunc : 遍历方法  thisObject ： this指向

// 使用Array.from() 创建并初始化一个数组
let arr_form = Array.from({length :5},function () {return 1;});
console.log("arr_from",arr_form);

// ES6 创建数组问题
// Array.of

// Array.fill




/*
*   0. JAVA 基础语法包括新特性
*   1. 数据结构与算法
*   2. 多线程
*   3. IO
*   4. JVM
*   5. 设计模式
*
*   1.css 包括 css3
*   2.html 包括 html5
*   3.JS  包括 ES各个版本语法
*
*   1.操作系统
*   2.数据库
* */