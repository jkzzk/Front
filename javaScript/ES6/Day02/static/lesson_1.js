/*
* 解构赋值
*   1.数组模型的解构
* */
let [a,b,c] = [1,2,3];
console.log("a",a);
console.log("b",b);
console.log("c",c);
// 嵌套模型
let [d,[e],[f,g,[h]]] = [1,[2],[3,4,[5]]];
console.log("d",d);
console.log("e",e);
console.log("f",f);
console.log("g",g);
console.log("h",h);
// 可忽略
let [i,[j],[,,[k]]] = [1,[2],[3,4,[5]]];
console.log("i",i);
console.log("j",j);
console.log("k",k);
// 默认值  当解构结果是 undefined 时，会触发默认值作为返回结果。
let [l = 1] = [undefined];
console.log("l",l);
// 不完全解构  没有赋值，则返回undefined
let [m,n] = [1];
console.log("m",m);
console.log("n",n);
let [p,...q] = [1,3,4,5,6];
console.log("p",p);
console.log("q",q);
// 字符串解构赋值  字符串是一个伪数组
let [o,r,s,t,u] = "hello";
console.log("o",o);
console.log("r",r);
console.log("s",s);
console.log("t",t);
console.log("u",u);
console.log("length",length);
console.log("hello","hello"[0]);
console.log("hello-length","hello".length);
// 应用
let paly_arr = [{name:"zhangsan"},{name:"lisi"},[{hobby:"basketball"},{hobby:"computergame"},{hobby:"ride"}]];
let [s1,s2,[h1,h2,h3]] = paly_arr;
console.log("学生1：" + s1.name);
console.log("学生2：" + s2.name);
console.log("共同爱好：" + h1.hobby);
console.log("共同爱好：" + h2.hobby);
console.log("共同爱好：" + h3.hobby);
// 变量交换
let x = 10;
let y = 20;
[x,y] = [y,x];
console.log("x",x);
console.log("y",y);
/*
* 解构赋值
*   2.对象模型的解构
* */
let { aaa, bbb } = { aaa: '111', bbb: '222' };
console.log("aaa",aaa);
console.log("bbb",bbb);
let { name : value } = { name : 'zhagnsan' };  // 1.获取嵌套对象 2.可以和对象中的名称不一致
console.log("value",value);
// 嵌套
let {person , relative : {relName,ral}} = {person : "zhangsan",relative : {relName:"lisi",ral:"qizi"}};
console.log("person",person);
console.log("relName",relName);
console.log("ral",ral);
// 不完全解构
let {ccc, ddd} = { ccc: '111' };
console.log("ccc",ccc);
console.log("ddd",ddd);
// 剩余运算符
let {eee,...rest} = {eee : '111', fff : "222", ggg : "333"};
console.log("eee",eee);
console.log("rest",rest);
let {ggg = 'haha'} = {eee : "xixi"};
console.log("ggg",ggg);
// 综合应用
let {type,list : [defa,...other]} = {type : 1,list : [{typeName : "二进制"},{typeName : "十进制"}]};
console.log("type",type);
console.log("defa",defa);
console.log("other",other);

// 深拷贝 数组用concat
let newArr = [1,3,4];
let arr = [].concat(newArr);
arr[0] = 10;
console.log("newArr",newArr);
console.log("arr",arr);
// 深拷贝 对象用 assign
let newObj = {name : "zhangsan"};
let obj = Object.assign({},newObj);
obj.name = "lisi";
console.log("newObj",newObj);
console.log("obj",obj);

let [...es6Arr] = newArr;
es6Arr[0] = 100;
console.log("newArr",newArr);
console.log("es6Arr",es6Arr);

// ELEMENTUI 中 API   方法参数 ({file,filelist})  参数默认值  解构默认值