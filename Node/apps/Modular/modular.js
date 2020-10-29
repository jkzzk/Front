/*
* 模块化
*   1.在Node中一个js就是一个模块
*   2.在Node中使用require函数引入其他模块
*   3.在每个模块中的作用域都是独立的,其实是函数作用域
*   4.可以使用 exports 将变量暴露给外部
*   5.模块分为两大类
*       核心模块：node引擎提供或者npm下载的模块
*           引入是直接使用名称
*       文件模块：由用户自己创建的模块
*           引用使用相对路径 使用 . 本目录  .. 上一级目录
*   6.全局变量 global相当于window全局对象
*   7.模块相当于一个函数
*       function (exports, require, module, __filename, __dirname)
*       exports : 导出变量
*       require ： 引入函数
*       module ： 模块本身
*       __filename ： 当前模块文件的绝对路径
*       __dirname ： 当前模块所在文件夹的绝对路径
*  8.exports与module.exports指向相同对象，都指向module.exports
*       exports只能使用.的方式进行赋值，不能指向其他对象，一旦指向，就与module.exports断开联系，无法
*   暴露变量
*       module.exports可是使用任何方式进行赋值
*  9.包结构
*       1.一个文件夹，就是一个包
*       2.必须有package.json 包描述文件
* 10.node读取模块的顺序
*   1.先在当前目录下寻找node_modules文件夹
*   2.没有再到该目录的上一级目录寻找node_modules文件夹，直到找到根目录下，有运行，没有报错
* */
let {x,y} = require("./modul_1");

console.log(x,y);

console.log(__filename);  // G:\LearnRecord\Front\1_Program\Front\Node\apps\Modular\modular.js