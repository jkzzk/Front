#CSS总结第一章
##&ensp;&ensp;&ensp;&ensp;第一节 文本样式
  
> 字体颜色
>
>> 属性:color  
>>
>> 值：
>>  1. 可接受英文颜色单词
>>  2. 16进制颜色值及其简写形势
>>  3. RGB颜色值以及RGBA颜色值
>>  4. HSL颜色值以及HSLA颜色值 
>>  5. 关键词 currentcolor
>>
>> 默认值-浏览器指定的，可继承，可应用到所有元素上 与 ::first-letter ::first-word   
>>
>> 特殊值：currentcolor 凡是以此为默认值的属性，都会默认应用该元素或者该元素祖先的color属性的颜色值
>
>> 所有浏览器都支持
>
> 字体种类
>
>> 属性: font-family  
>>
>> 值：  
>>   1. 具体字体类型名称  
>>   2. 字体族群名称  
>>  
>> 默认值-浏览器指定的，可继承，可应用到所有元素上 与 ::first-letter ::first-word
>>  
>> 字体泛型(字体族群)： 通用的字体分类，将遵守一种字体规则的字体分为一类
>>
>> 泛型分类（通用字体族群）：
>> 1. serif 衬线字体，字体的尾端有小装饰
>> 2. sans-serif 非衬线字体，字体的尾端平滑
>> 3. monospace 等宽字体
>> 3. cursive 草书字体，字体笔画连接比较多，行云流水一般
>> 4. fantasy 虚幻字体，有更多的装饰效果的字体
>> 5. system-ui 系统默认字体
>> 6. math 有关数学的字体
>> 7. emoji 支持表情字体符号
>> 7. fangsong 汉字字体，仿宋
>>
>> 字体栈： font-family 可接受多种字体值，用逗号隔开，并从左向右一次查找，找到应用，找不到继续找，还找不到，应用浏览器默认字体
>>
>> CSS4:
>>   1. system-ui 引用系统默认字体  火狐与IE不支持
>>   2. math  专为表示数学而设计的字体
>>   3. emoji 表情字体 
>>   4. fangsong 汉字字体，仿宋
>
> 字体大小
>
>> 属性：font-size
>>
>> 值：
>> 1. px,绝对值像素值
>> 2. em,按照父元素字体大小的比例来设计
>> 3. rem,按照&lt;html&gt;元素的字体大小来设计，只支持IE9及以上
>> 4. 百分比，相对于父元素的字体大小
>> 5. 固定绝对值  xx-small, x-small, small, medium, large, x-large, xx-large
>> 6. 固定相对值  larger, smaller 相对于父元素的字体大小
>>
>> 默认值 mdeium，可继承，可应用到所有元素上 与 ::first-letter ::first-word
>
> 字体样式
>
> 一、属性：font-style 设置字体倾斜
>>
>> 值：
>>  1. normal: 将文本设置为普通字体 (将存在的斜体关闭,改变标签样式)
>>  2. italic: 如果当前字体的斜体版本可用，那么文本设置为斜体版本；如果不可用，那么会利用 oblique 状态来模拟 italics
>>  3. oblique: 将文本设置为斜体字体的模拟版本，也就是将普通文本倾斜的样式应用到文本中
>> 
>> 默认值：normal，可继承，可应用到所有元素上 与 ::first-letter ::first-word
>>
>> CSS4：  
>>  1. oblique 值后面可以跟一个角度 -90deg~~90deg 现阶段只有火狐支持
>>
> 二、属性：font-weight 设置字体粗细
>>
>> 值：
>>  1. normal, bold: 普通或者加粗的字体粗细
>>  2. lighter, bolder: 将当前元素的粗体设置为比其父元素粗体更细或更粗一步
>>  3. 100–900: 数值粗体值，如果需要，可提供比上述关键字更精细的粒度控制
>>
>> 默认值：normal，可继承，可应用到所有元素上 与 ::first-letter ::first-word
>>
> 三、属性：text-transform: 设置要字体的转换形态
>>
>> 值：
>>    1. none: 防止任何转型
>>    2. uppercase: 将所有文本转为大写
>>    3. lowercase: 将所有文本转为小写
>>    4. capitalize: 转换所有单词让其首字母大写
>>    5. full-width: 将所有字形转换成全角，即固定宽度的正方形，类似于等宽字体，允许拉丁字符和亚洲语言字形（如中文，日文，韩文）对齐 只有火狐支持 CSS3
>>
>> 默认值：none，可继承，可应用到所有元素上 与 ::first-letter ::first-word
>>
> 四、属性： text-decoration: 设置/取消字体上的文本装饰   其为缩写形势
>>
>> 值：  
>>   1. none: 取消已经存在的任何文本装饰  
>>   2. underline: 文本下划线  
>>   3. overline: 文本上划线  
>>   4. line-through: 穿过文本的线  
>>   5. blank 文本闪烁（文本交替处于显示与隐藏状态）,目前为止没有浏览器实现
>>
>> 默认值 ： none ，不可继承，可应用到所有元素上 与 ::first-letter ::first-word
>>
> 五、属性： text-decoration-line 设置文本装饰的位置  可以指定多个值，空格隔开  不可继承
>>
>> 值：
>>   1. none: 取消已经存在的任何文本装饰  
>>   2. underline: 文本下划线  
>>   3. overline: 文本上划线  
>>   4. line-through: 穿过文本的线 
>>   5. blank 文本闪烁（文本交替处于显示与隐藏状态）,目前为止没有浏览器实现
>>
>> 默认值 ： none ，不可继承，可应用到所有元素上 与 ::first-letter ::first-word
>>   
> 六、属性： text-decoration-style 设置文本装饰的样式
>    
>> 值：
>>  1. solid 单实线
>>  2. double 双实线
>>  3. dotted 点划线  
>>  4. dashed 虚线
>>  5. wavy 波浪线
>>
>> 默认值 ： solid ，不可继承，可应用到所有元素上 与 ::first-letter ::first-word
>>
> 七、属性： text-decoration-color 设置文本装饰的颜色
>>
>> 值：可以接受任何合法颜色值
>>
>> 默认值为浏览器默认颜色，不可继承，可应用到所有元素上 与 ::first-letter ::first-word
>>
> 八、属性： text-decoration-skip 设置文本装饰被跳过，浏览器几乎不支持，默认效果为行内块元素与图片被跳过装饰 CSS4
>>
> 九、属性： text-decoration-skip-ink 设置文本装饰是否跨越字形 CSS4
>>
>> 值:
>>   1. none 不跨越
>>   2. auto 跨越
>>   3. all 必须跨越 只有火狐支持
>>
>> 默认值 ： auto ，可继承，可应用到所有元素上
>>
> 十、属性: text-decoration-thickness 设置文本装饰的粗细 目前只有火狐支持
>>
>> 值：
>>   1. auto 引用浏览器默认的宽度
>>   2. from-font 根据字体的字体文件的粗细进行调节
>>   3. 长度值
>>   4. 百分比
>>
>> 默认值:auto，不可继承，可应用到所有元素上 与 ::first-letter ::first-word
>>
> 十一、属性： text-underline-offset  设置文本装饰下划线向下偏移量 目前只有火狐支持 CSS4
>>
>> 值：
>>   1. auto  默认值，应用浏览器设置的默认偏移量
>>   2. 长度值
>>   3. 百分比
>>
>> 默认值:auto，可继承，可应用到所有元素上 与 ::first-letter ::first-word
>>
> 十二、属性: text-underline-position 设置文本装饰下划线的位置  CSS3
>>
>> 值：
>>   1. auto 默认值，应用浏览器设置的默认位置
>>   2. under 强制下划线在字母基线的下方
>>   3. left/right  在垂直排版时，强制下划线在文字的左侧/右侧，如果为水平文字，则与under一致
>>
> 十三、属性: text-emphasis 设置文本强调  简写属性 CSS3  除了火狐外需要加入-webkit-前缀
>>
>> 值：
>>   1. none 默认值，没有任何文本强调
>>   2. filled 实心
>>   3. open 空心
>>   4. dit 点
>>   5. circle 圈
>>   6. double-circle 同心圈
>>   7. triangle 三角形
>>   8. sesame 点
>>   9. 任何字符
>>   10. 颜色值
>>
>> 默认值:none，不可继承，可应用到所有元素上
>>
> 十四、属性： text-emphasis-position 设置文本强调的位置
>>
>> 值：
>>   1. over 在文字上方
>>   2. under 在文字下方
>>   3. right 在字的右面
>>   4. left  在字的左面
>>
>> 默认值因浏览器不同而不同，不可继承，可应用到所有元素上
>>
> 十五、属性： text-shadow 设置文字阴影 CSS3
>>
>> 值：
>>  1. 颜色
>>  2. X轴与Y轴上的偏移量，整数是向右、向下偏移
>>  3. 阴影模糊程度，越高，阴影越大，越轻
>>
> 十六、属性： text-align 排列文本   
>> 
>> 值：
>>   1. right 靠右对齐
>>   2. left 靠左对齐
>>   3. center 居中对齐
>>   4. justify 两端对齐
>>
>> 默认值:left，可继承，可应用到所有块级元素上
>>
> 十七、属性： text-align-last 排列最后一行文本
>>
>> 值：
>>   1. auto 值有text-align的值来确定,当text-align 设置了 justify时，最后一行值为start
>>   2. start 如果文本展示方向是从左到右，起点在左侧，则是左对齐；
>>            如果文本展示方向是从右到左，起点在右侧，则是右对齐。
>>   3. end   如果文本展示方向是从左到右，末尾在右侧，则是右对齐；
>>            如果文本展示方向是从右到左，末尾在左侧，则是左对齐。
>>   4. left 最后一行文本向左与内容盒子对齐
>>   5. right 最后一行文本向右与内容盒子对齐
>>   6. center 最后一行文本居中与内容盒子对齐
>>   7. justify 最后一行文本两端与内容盒子对齐
>>
>> 默认值：auto 可继承 应用在块级元素上
>>
>  十八、属性：text-combine-upright 排列垂直文本
>>
>> 值：
>>   1. none  没有设置任何值
>>   2. all 将所有连续的字符全部放到一个字宽的空间中，并且竖直排放
>>   3. digits 数值(2-4) 将2到4个连续的ASCII字符竖直排放并放到一个自宽的空间中，
>          现阶段text-align所有浏览器都不支持这个属性
>>
>>  默认值：none 可继承  应用在不可替换行内元素
>>
>  十九、属性：text-indent 文本首行缩进
>> 
>> 值：
>>   1. 长度值 px em 
>>   2. 百分比
>>
>>  默认值 ： 0 可继承 块级元素