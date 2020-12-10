## jsdom 编程艺术

- 1.简史
- 2.js 语法
- 3.dom
- 4.js 图片库
- 5.最佳实践
- 6.图片库改进
- 7.动态创建标记
- 8.充实文档内容
- 9.css-dom
- 10.js 实现动画效果
- 11.html5
- 12.综合示例

## DOM

- D: doucment
- O:
  - 1. user defined object
  - 2. native object
  - 3. host object 宿主浏览器提供的的对象
- M: Model parent child sibling tree

```js
html;
head;
meta;
title;
body;
h1;
p;
ul;
li;
li;
li;
```

## 节点 node

- element node 元素节点 是 DOM 的原子

- attribute node 属性节点 对元素节点进行具体的描述 p title 对 p 进行 title 的描述，并非所有的元素都包含属性 但是属性节点一定包含在元素节点里面
- text node 元素节点里面的不一定包含文本节点 比如 ul 里面包含的是 li 但是所有的文本节点都包含在元素节点里面

## css

```css
selector {
  property: value;
}

eg:
p {
  color: yellow;
  font-family: "arial", sans-serif;
  font-size: 1.2em;
}
```

- 继承（inheritance）是 css 中一项强大的功能，节点树上的各个元素将继承其父元素的样式属性，比如 body 定义了颜色和字体，颜色不仅作用于直接包含在 body 标签里面的内容还将作用于嵌套在 body 元素内的所有元素
- class 属性 可以在所有元素上应用 class 属性
- id 属性 给网页上某个元素加上一个独一无二的的标识符
- css 和 html 如何联系起来的? 通过 html id class 属性节点 和 css 里面 id css 链接的

## 获取元素 : 文档中每个元素都是对象

- id `document.getElementById(id)` id 必须放在单引号或者双引号里面 方法名区分大小写
- 标签名 `document.getElementsByTagName(tag)`
  - 获取所有元素 `document.getElementsByTagName('*')`
- 样式 html5 中提供的 `document.getElementsByClassName` 会有兼容问题 所以要自己实现一下
- `document.getElementById(id)` 返回一个对象 对应文档里一个特定的元素节点
- `document.getElementsByTagName(tag)` `document.getElementsByClassName` 返回一个类数组，分别对应文档里面的一组特定的元素节点

## 获取和设置属性

- getAttribute value || null
- setAttribute

## 其他属性和方法

- nodeName
- nodeValue
- childNodes
- nextSibling
- parentNode

## 动态创建 html

- document.write
- document.innerHTML

## dom 的方法

- createElement
- appendChild 形成父子元素
- createTextNode 名字起的不好 就是创建文本节点

## 循序渐进 和 预留退路

- 从最核心的需求出发
- 循序渐进的必然结果是预留退路
- block - inline - 横排
- inline - block - 竖排

## dom 可以做的事儿

- 把隐藏在属性的信息检索出来
- 把这些信息动态的创建 html 来
- 把 html 插入到文档里

## 最后的综合实例 在 websiteFinal 目录下

```
目录结构的设计大致如下: 表现 结构 行为 分离的思路
css
    basic.css
    color.css
    layout.css
    typography.css
js
    common.js 公共的方法 可能会个别依赖
    pageCommon.js 每个页面都要执行的方法
    每个具体的js
    index.js
    about.js
    contact.js
    live.js
    photos.js
images
    some images
index.html


animaiton   动画  setTimeout 递归的使用 自定义属性的使用
addLoadEvent window.onload的封装
addClass css
createElement
兼容性的检查
错误的处理
图片切换
css 可以@import url(css file path) 引入其他的css 浏览器控制台里面检查的时候 这种css不能被修改
table 隔行变色 table html的熟悉
form的 html的熟悉 validate form  restForm form.element.length
a标签的切换
控制块儿的显示和隐藏
element.style.property 取属性
elemnt.style.property = newValue 设置属性
XHRHttpRequest 对象 负责浏览器和服务器之间的中转
```

## demos

- [links](https://drive.google.com/file/d/1ZmQI9iLmWj5z07crvMSonSueVwkra2Ow/view)
- or open the `websiteFinal/index.html` in browser. enjoy it !
