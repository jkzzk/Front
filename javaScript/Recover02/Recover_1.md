#JS总结第一章
##&ensp;&ensp;&ensp;&ensp;第二节 JS基础语法
###&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;1.1 引入方式
        
    1.内联式
        在script标签中写入js脚本
        <script type="text/javascript">
            。。。。。
        </script>
    2.外联式
        <script type="text/javascript" src="相对或绝对地址" />
        
###&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;1.2 输出语句        

    1.console
        1) console.log(p1,p2,p3....)  在控制台打印,输出  等同于 console.info()
        2) console.table(p1)  以表格形式打印数组或者对象，比较直观
    2.alert
        alert(message) 将message以弹出框的方式打印
            特点中断js程序运行
    3.document.write(exp1,exp2,exp3,...)
        在文档模型里输出
        
###&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;1.3 注释

    1.单行注释
        // 注释内容
    2.多行注释
        /**/
        
###&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;1.4 字面量与变量
    
    1.字面量
        代码中的值
        整形字面量 ： 1 2 3 123
            - 特殊值 ： NaN 不是数字   Infinity 无穷大
        浮点型字面量 ： 1.1 1.2 1.3 1.123
        字符串字面量 ： '1' 'a' '@' '1a@' "abc"
            可以用单引号，也可以用双引号，可以嵌套使用，但是不能交叉使用
        布尔类型字面量 ： true 或 false
        其他类型 ： undefined（未定义字面量） 与 null （空值字面量）
    2.变量
        代码中可变的量
        定义格式： 
            1. var 变量名称 = 变量值
            2. 变量名成 = 变量值
        说明：
            1.JS中的变量没有类型可言，他存储的类型有字面量值决定
            2.var关键字会使得变量声明提升，提升到代码的最顶部
        
###&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;1.5 类型转换

    1.查看JS变量的类型
        关键字 ： typeof
        说明：以字符串的格式返回变量的类型、
        注意：null的typeof结果为'object'
    2.各类型的转换
        (1) 布尔类型的转换
            - 使用Boolean()函数
            - 使用!! 连续两个取反符号
            - 转换结果
                1.Number转boolean 除了 0 和 NaN 外，都会转换为true
                2.字符串转Boolean 除了 空串 是false 其余的都是true
                3.null转Boolean   转换为fasle
                4.undefined转Boolean 转换为fasle
        (2) 数字类型转换
            - 使用Number() 函数，属于强制类型转换
            - 使用parseInt() 与 parseFloat() 函数，参数只能是字符串类型
            - 使用加减乘除与 1 或 0 进行运算后，转换
            - 转换结果
                1.使用Number()函数
                    - 字符串为纯数字字符串是可以丝滑转换,包括小数点
                    - 字符串中有其他字符串时，返回NaN
                    - 空白与空字符串，返回 0
                    - 布尔类型 true 返回 1， false 返回 0
                    - null 返回0 ， undefined 返回NaN
                2.使用parseInt() 与 parseFloat()
                    - 只转换开始位置起，有效的小数或整数
                    - 如果开始位置是非法字符，那么返回NaN
                3.使用运算符
                    - 字符串为纯数字字符串是可以丝滑转换,包括小数点
                    - 字符串中有其他字符串时，返回NaN
                    - 空白与空字符串，返回 0
                    - 布尔类型 true 返回 1， false 返回 0
                    - null 返回0 ， undefined 返回NaN
        (3) 字符串类型转换
            - 使用toString() 函数
            - 使用String() 函数
            - 使用 与 空字符串相加的方式
            - 转换结果
                1.布尔值、数字都会转换为相应的字符串
                2.null与undefined 只能用String()方法和与空字符串相加的方式，返回 "null" "undefined"
                
###&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;1.6 运算符
                
###&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;1.7 面向过程语法                