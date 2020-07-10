# Node 

## 创建第一个应用HelloWorld

> 1.Node.js 应用的组成部分
    
* 引入 required 模块：我们可以使用 require 指令来载入 Node.js 模块。
* 创建服务器：服务器可以监听客户端的请求，类似于 Apache 、Nginx 等 HTTP 服务器。
* 接收请求与响应请求 服务器很容易创建，客户端可以使用浏览器或终端发送 HTTP 请求，服务器接收请求后返回响应数据。

> 2.创建过程

* 引入http模块  >>>>  var http = require("http");
* 创建服务器

``` javascript
    var http = require('http');
    
    http.createServer(function (request, response) {
    
        // 发送 HTTP 头部 
        // HTTP 状态值: 200 : OK
        // 内容类型: text/plain
        response.writeHead(200, {'Content-Type': 'text/plain'});
    
        // 发送响应数据 "Hello World"
        response.end('Hello World\n');
    }).listen(8888);
    
    // 终端打印如下信息
    console.log('Server running at http://127.0.0.1:8888/');
```

* 运行代码 >>>> node server.js

## 使用NPM

> 1.npm在下载安装node.js时，自动安装，可以把第三方包下载到本地，类似于maven

> 2.命令

* 本地下载，下载到项目下  >>>> npm install 模块名
* 全局下载，下载到系统用户下（本地仓库） >>>> npm install 模块名 -g
* 查看全局下载列表，也就是查看本地仓库的所有包 >>>> npm list -g
* 卸载模块 >>>> npm uninstall 模块名
* 更新模块 >>>> npm update 模块名
* 搜索模块 >>>> npm search 模块名
* 发布模块到npm远程仓库 >>>> npm publish
* 清除缓存 >>>> npm cache clear

## package.json

> 1.在每个模块包下都有一个package.json，来定义该包的属性

> 2.属性含义

* name - 包名。
* version - 包的版本号。
* description - 包的描述。
* homepage - 包的官网 url 。
* author - 包的作者姓名。
* contributors - 包的其他贡献者姓名。
* dependencies - 依赖包列表。如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下。
* repository - 包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上。
* main - main 字段指定了程序的主入口文件，require('moduleName') 就会加载这个文件。这个字段的默认值是模块根目录下面的 index.js。
* keywords - 关键字 

## REPL(交互式解释器)

> 1.Node的终端，类似于谷歌浏览器的DevTools

> 2.作用
    
* 读取 - 读取用户输入，解析输入了Javascript 数据结构并存储在内存中。
* 可以存储变量，执行多行命令
* 执行 - 执行输入的数据结构
* 打印 - 输出结果
* 循环 - 循环操作以上步骤直到用户两次按下 ctrl-c 按钮退出。