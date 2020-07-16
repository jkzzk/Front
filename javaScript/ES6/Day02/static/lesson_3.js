/*
* Map
*   1.使用键值对存储数据
*   2.键可以是任何类型  原始类型、对象、函数
*   3.遍历顺序与填入顺序一致
* */

// 创建Map对象
let map = new Map();

// 设置与获取值
map.set("key","value");
console.log("map",map.get("key"));

// 使用特殊值作为键
let sy = Symbol("map");  // 使用 Symbol值
// map.set(sy,"symbol");
console.log("sy",map.get(sy));
let nan = Number("foo");  // 使用 NaN
map.set(nan,"not a number");
console.log("nan",map.get(nan));
console.log("nan",map.get(Number("zzk")));

// 使用对象作为键
let obj = {};
map.set(obj,"is a obj");
console.log("obj",map.get(obj));
let arr = new Array(5);
map.set(arr,"is a arr");
console.log("arr",map.get(arr));

// 使用函数作为键
let func = function () {};
map.set(func,"is a function");
console.log("func",map.get(func));
console.log("func_def",map.get(function () {})); // undefined

/*
*  map 五种的遍历
* */
// 直接遍历
console.warn("直接遍历");
for(let [key,value] of map) {
    if(typeof key === "symbol") {
        continue;
    }
    console.log("{key : " + key + " , value : " + value + "}");
}
// entries方法遍历
console.warn("entries方法遍历");
for(let [key,value] of map.entries()) {
    if(typeof key === "symbol") {
        continue;
    }
    console.log("{key : " + key + " , value : " + value + "}");
}
// key方法遍历
console.warn("key方法遍历");
for(let key of map.keys()) {
    if(typeof key === "symbol") {
        continue;
    }
    console.log("{key : " + key + " , value : " + map.get(key) + "}");
}
// value方法遍历
console.warn("value方法遍历");
for(let value of map.values()) {
    console.log("{value : " + value + "}");
}
// forEach方法遍历
console.warn("forEach方法遍历");
map.forEach(function (key,value) {
    console.log("{key : " + key + " , value : " + value + "}");
});

/*
*   map 数组转换
*       map可以使用二维数组构造
*       Map也可以通过Array.from() 方法转换为二维数组
* */

let arr_map = Array.from(map);
console.log("arr_map",arr_map);

let newMap = new Map(arr_map);
// newMap = new Map([...map]);
console.log("newMap",newMap);
console.log("newMap",newMap == map);  // 深拷贝

/*
* map 的合并
* */
let mergeMap = new Map([...map,...newMap]); // 三点运算符用于合并
console.log("mergeMap",mergeMap); // 合并后，后面的map会覆盖前边的map的相同值

/*
* map 的键值对个数
* */
let map_length = map.size;
console.log("map_length",map_length);

// map存储键不能重复
map.set(1,"is a 1 object");
console.log("1",map.get(1));
map.set(1,"is a 1 object too");
console.log("1",map.get(1)); // is a 1 object too
console.log("1",map); // 覆盖掉相同键的值

// JS使用迭代器遍历map对象
const mapIt = map[Symbol.iterator]();
console.log("iterator",mapIt);
while(true) {
    let next = mapIt.next();
    if(next.done) {
        break;
    }
    console.log("{key : " + next.value[0] + " , value : " + next.value[1] + "}");
}

/*
* Set集合
*   存储单值，不能重复
*   注意：
*       一些恒等值，不能重复，但是NaN这种不恒等的特殊值，在Set集合中只能存储一个
* */

let set = new Set();
// 存储原始数据类型
set.add("abc");
console.log("set",set);
// set.add(Symbol());
console.log("set",set);
// 存储对象
set.add({});
set.add({});
console.log("set",set);
// 存储函数
let func_set = function() {}
set.add(func_set);
set.add(function() {});
console.log("set",set);

/*
*  Set与数组转换
* */
let set_arr = Array.from(set);
console.log("set_arr",set_arr);
let newSet = new Set([...set_arr]);
console.log("newSet",newSet);
console.log("newSet == set",newSet == set);  // 拷贝
// 用字符串构造
let strSet = new Set("hello");
console.log("strSet",strSet);
// 遍历
let it_set = set[Symbol.iterator]();
while(true) {
    let next = it_set.next();
    if(next.done) {
        break;
    }
    console.log("value : " + next.value);
}
// set操作 并集
let megre_set = new Set([...set,...newSet]);
console.log("megre_set",megre_set);
megre_set = new Set([...set,...strSet]);
console.log("megre_set",megre_set);
// set操作 交集
let intersect = new Set([...set].filter(item => newSet.has(item)));
console.log("intersect",intersect);
// set操作 差集
let diffence = new Set([...set].filter(item => !newSet.has(item)));
console.log("diffence",diffence);

