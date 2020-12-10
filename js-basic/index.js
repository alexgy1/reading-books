/*let first 
console.log(first)

first = 1
console.log(first)

//声明变量 并赋值，第一次赋值叫初始化
let name = 'tom'

//可以给let声明后的变量再次赋值
name = 'another name'

let NAME = 'jom'
let className = 'className'
let _test = '_test'
let $this = '$'

//声明常量 不可再次被赋值
const PI = Math.PI 

//给常量再次赋值会报错
// PI= 1 //Uncaught TypeError: Assignment to constant variable.
// console.log(PI)
console.log(name,NAME,className,_test,$this)

// let man = '\u200D'
// console.log(man)

// let a ={
//     val:1,
//     valueOf:()=> a.val++
// }

// if((a ==1 && a==2 && a==3)){
//     console.log('ssss')
// }



//声明一个函数 function 关键字 + 函数名字 + () {函数体里面写内容}
function log(){
    console.log('this is my frist function')
}
//执行函数 函数名+() 执行函数
log()


// //声明一个类
class Person{
    constructor(name){
        this.name = name
    }
    sayName(){
        console.log(this.name)
    }
}

let xiaoming = new Person('小明')
console.log(xiaoming)
xiaoming.sayName()

let number = 1
let isOlderThan18 = number > 18 
console.log(isOlderThan18)

let name = 'tom'
let helloStr = 'hello '
let world = "world"
console.log( helloStr, world)
//字符串拼接
console.log( `welcome ${name}`)

//数组
let myNameArray = ['Chris', 'Bob', 'Jim'];
//获取数组对象的长度
console.log(myNameArray.length)
//获取数组元素 通过 arr[index] index from 0 - arr.length-1
let first = myNameArray[0]
let last = myNameArray[myNameArray.length-1]

//对象
let person = {
    name: 'js',
    age: 18,
    hobbies:['music','game','movie']
}

//获取对象的属性值 obj.attr es5写法不推荐
let personName = person.name

//推荐es6 对象的解构赋值
//函数表达式
const logPersonAttrs =(person)=>{
    const {name, age} = person
    return `person name is ${name} , age is ${age}`
}
// console.log(`person name is ${personName}`)
console.log(logPersonAttrs(person))

const checkType =(t)=> typeof t
const log = (k)=> console.log(k ,checkType(k))

let nagativeNumber = -1
console.log( nagativeNumber)

let number1 = 1
let number2 = 2
let num3 = '1'
//自增
log(number1++)
log(number1)
//自减
log(--number1)
log(number1)

//算数 + - * / %  ** 
log(1+2)
log(1-2)
log(8*2)
log(8/2)
log(3%2) // 1 
log(2 ** 10) // 

//比较操作符
log(number1 > number2)
log(number1  == number2)
log(number1  < number2)
log(number1 >= number2)
log(number1 <= number2)


console.log('null == undefined',null == undefined)
console.log('null === undefined',null === undefined)


// let stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
//                 'GNF576746573fhdg4737dh4;Greenfield',
//                 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
//                 'SYB4f65hf75f736463;Stalybridge',
//                 'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

// let result = []   
// for (let i = 0; i < stations.length; i++) {
//   let input = stations[i];  
//   let [first,second] = input.split(';')
//   result.push(`${first.slice(0,3)}:${second}`)
// }
// console.table(result)


console.clear()
console.log(true || false)
console.log(false || true)
console.log(false || false)

// &&  || ! 
console.log(true && true)
console.log(false && false)

console.log(!true)
console.log(!false)

console.log()
console.log('!!true :', !!true)
console.log('!!!true:',!!!true)
console.log('!!!!true :', !!!!true)

const f =(obj)=>{
    // && 满足所有条件才执行
    obj && typeof obj.fire ==='function' && obj.fire()
}

f({
    fire:()=>{console.log('i am fire')}
})

console.log()

console.log(!![])
console.log(!!{})

// if(0 || '' || ""  || undefined || null || false || NaN ){
//     console.log('true')
// }

// else{
//     console.log('false')
// }


//define type function
function type(obj){
   return  Object.prototype.toString.call(obj).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
}

//use type function 
[1,'1',{},[],true, Symbol, function(){}, Math.random , window, document.createElement('div')].forEach( i=>{
    console.log(`当前值${i}的type是 ${type(i)}`)
})


// && 
console.log(true && true) // true
console.log(false && false) //false
console.log(true && false) //false
console.log(false && false)  //false 

console.log(false && console.log('我不会输出'))//false
console.log( true && console.log('我会输出')) //我会输出

// || 
let o1 = true  || true      // t || t 返回 true
let o2 = false || true      // f || t 返回 true
let o3 = true  || false     // t || f 返回 true
let o4 = false || (3 == 4)  // f || f 返回 false
let o5 = "Cat" || "Dog"     // t || t 返回 "Cat"
let o6 = false || "Cat"     // f || t 返回 "Cat"
let o7 = "Cat" || false     // t || f 返回 "Cat"
let o8 = ''    || false     // f || f 返回 false
let o9 = false || ''        // f || f 返回 ""

//  ! 取反 
console.log(!true)
console.log(!false)
console.log(!null)

console.log(1111)

// // !! 转布尔值
console.log(!!true) //true
console.log(!!false) //false
console.log(!!{}) //true
console.log(!!undefined) //false
console.log(!!!undefined) //true
console.log(!!!!undefined) //false




// 十转二进制
console.log(parseInt(2).toString(2)) // 010
console.log(parseInt(3).toString(2)) // 011
console.log(parseInt(5).toString(2)) // 101
console.log(parseInt(6).toString(2)) // 101
console.log(parseInt(7).toString(2)) // 111
console.log(parseInt(10).toString(2)) // 1010
// 表达式是能计算出结果的一段代码
// 5  101
// 3  011
console.log('5&3' , 5&3)  // 1 按位与
console.log('5|3', 5|3)   // 111=>7 按位或
console.log('5^3' , 5^3)  // 110 => 6 相同返回0 不同返回1  按位异或

console.log('~5', ~5 ) //-6  按位或
console.log('~3', ~3) // -4
console.log('5>> 1', 5>>1) //无符号右移 2
console.log('5<<1', 5<<1)  //无符号左移 10
console.log('5>>>1' , 5>>>1)// 2 正数的有符号右移和 无符号右移一样
console.log('-1>>>1' , -1 >>> 1)//2147483647 这样就很大

let score = 60
let result  = score > 60 ? '及格':'不及格'
console.log(result)//不及格

let name = 'alex'
console.log(name) //alexs
{
    let age = 18
    console.log(age)
    {
        let time = 2020
        console.log(time ) //2020
        console.log(age) //18
        // console.log( notDefined)//index.js:300 Uncaught ReferenceError: notDefined is not defined
    }
    console.log(name) //alex
    // console .log(time)//Uncaught ReferenceError: time is not defined
}
// console.log(age)// age is not defined

//if else 判断是否及格
let score = 100
if(score > 60){
    console.log('及格')
}else{
    console.log('及格')
}




// 嵌套的if else 
// 判断是否及格 以外 得分100 或则0分的 特别输出 

if(score > 60){
    if(score == 100){
        console.log('满分')
    }else{
        console.log('及格')
    }
}else{
    if(score == 0){
        console.log('0分')
    }else{
        console.log('不及格')
    }
}


// if else if else 
let  expr1 = 'Papayas1';

if(expr1 == 'Oranges' ){
    console.log('Oranges are $0.59 a pound.');
}else if(expr1 == 'Mangoes' || expr1 == 'Papayas'){
    console.log('Mangoes and papayas are $2.79 a pound.');
}else{
    console.log(`Sorry, we are out of ${expr1}.`);
}//Sorry, we are out of Papayas1.


//switch case  （===）严格比较
//let  expr = 'papayas'; //Sorry, we are out of papayas. （===）严格比较
let  expr = 'Papayas'; //Mangoes and papayas are $2.79 a pound.
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}


//用while实现一个输入密码
// let password = ''
// while(password !== '123'){
//     password = prompt('请输入三位数的密码')
// }

//用while实现一个只能输出五次的输入框

// let password = '' //声明一个变量记录当前密码， 初始值是空字符串
// let tryTime = 5  //声明一个变量记录可以尝试几次
// while(password !== '123'){
//     if(tryTime<1){
//         alert('你没有尝试的机会了！')
//         break
//     }
//     password = prompt(`请输入三位数的密码: 还可以尝试${tryTime--}次`)// tryTime--先显示再减1 
// }


//for 循环 实现输出0-5
for(let i=0, len =5; i<=len; i++){
    console.log(i)
}


//for 循环 实现输出0 2 4 6 8
for(let i=0, len =10; i<len; i+=2){
    console.log(i)
}

//for 循环实现输出 0-n 
//这里n是不确定的,每次写一大段重复代码不现实，
//所以定义一个函数，封装不变的部分，变化的部分用参数替代，参数是n 每次传入不同的参数即可
const logN = (n)=>{
    for(let i=0, len =n; i<=len; i++){
        console.log(i)
    }
}
logN(3)
logN(2)




let sex = 'sex'
let config = {name:'alex',age:18, sex:'男'}
console.log('config.name',config.name)
console.log('config.age', config.age)
console.log("config['age']", config['age'])
console.log('config["name"]', config['name'])
console.log( 'config[sex] 通过对象[变量名]获取对应的值', config[sex])

//es6 对象的解构赋值 取对象的属性值，只要结构相同 key相同就可以取出来
let {name ,age} = config;
console.log('name is '+ name, 'age is '+ age)

//合并两个对象
let newConfig = {name:2, time:'2020-05-07'}
let  finalObj = {...config, ...newConfig}
console.log(finalObj)

//只更新对象的一个属性 比如name属性
finalObj = {...finalObj, name:'testName'}
console.log(finalObj)

//遍历对象, 输出对象的所有key 和values
let count = 0
for(let key in finalObj){
    count++
    console.log(`key is ${key}, value is ${finalObj[key]}`)
}
console.log(count)

let arr = ['js','html','css','nodejs']
//for in 遍历  不推荐
// for (let val in arr){
//     console .log(val ,arr[val])
// }

// for of 遍历 输出数组的每一项  推荐
for(let i of arr ){
    console.log(i )
} 
//forEach 遍历  推荐
arr.forEach( (item, index)=> console.log(item, index))


console.clear()
// for of  + 结构赋值  遍历数组对象
let students = [
    {
        'name' :'lili',
        'age' : 18,
         math : 100,
         english : 90
    },
    {
        'name' :'tom',
        'age' : 18,
         math : 90,
         english : 90
    }
]

// for(let stu  of students){
//     console .log (stu)
// }



let result = 0
for(let {name, age,math, english} of students){
    // console .log (name, age,math, english)
    let nowCate = math
    result +=  nowCate
}
console.log(result)

//计算所有学生的英语成绩总分
function calcByCategorry(students, cate =  'math'){
    return students.map( s => s[cate])
                   . reduce( (acc, next)=>  acc+= next, 0)
}
console.log(`所有学生的数学成绩是： ${calcByCategorry(students)}`)
console.log(`所有学生的英语成绩是： ${calcByCategorry(students , 'english')}`)



//根据不同的状态码，提示不同的消息
let nowCode = 2
switch(nowCode){
    case 0:
    case 1:
        alert('成功')
        break
    case 2:
        alert('失败')
        break
    case 4:
        alert('请求中')
        break
    default:
        alert('未知的状态码')
}
//改写成对象存储 key : 状态码  value : 对应的文案
function judgeCodeStatus(nowCode = 0){
    let statueCode  ={
        0 : '成功',
        1 : '成功',
        2 : '失败',
        4 : '请求中'
    }
    if(statueCode[nowCode]){
        alert(statueCode[nowCode])
    }else{
        //defalut情况
        alert('未知的状态码')
    }
}
judgeCodeStatus(prompt('请输入状态码'))


//不用for/while循环 如何输出1-5
//笨方法
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

//发现上面笨方法里面不变的都是console.log 变化的之是里面的值 用for 让值从1变化到5里面输出即可
for(let i=0; i<=5; i++){
    console.log(i)
}

//用while
let index = 0
while(index<=5){
    console.log(index)
    index++
}

//如过打印1-n n=100 || 10000？ 上面for或者while的语句也很吃力了，每次都要改的部分只有n
//所以把n这个变化的地方当成函数的参数，调用函数的时候传具体的值即可
const log0ToN = (n)=>{
    for(let i=0; i<=n; i++){
        console.log(i)
    }
}
//调用函数 传递具体的参数
log0ToN(30)
log0ToN(1)

//for 循环 输出0-4 跳过2
// for(let i=0; i<10; i++){
//     if(i==2) continue
//     if(i==5) break
//     console.log(i)   
// }
 
// console.log('---------------')

//while循环 输出0-4 跳过2
// let num =0 
// while(true){
    
//   if(num ==1) continue
    
//     if(num ==5) break
//     num++
//     console.log(num)
    
// }



// 函数表达式 let add = (a, b)=>{}

// 函数定义

// // function fnName(arg1, arg2, ...argn){
// //     //statements
// //     return someVariable
// // }



// 函数有返回值
function add(num1, num2){
    return num1 + num2
}
console.log(add.name)// add
// 函数没有返回值
function getA(a){
    if(a < 0){
        console.log('a 应该大于0')
        return 
    }
    return a 
}








//函数的默认参数
function l(a = 'defaultvalue'){
    console.log(a)
}
l() //defaultvalue
l(1) //1


//arguments 计算任意个数字之和
function sum(){
    let res = 0;//1声明一个变量，存储结果
    console.log(arguments)
    //2循环 累加所有值 求和
    for(let i=0; i< arguments.length; i++){
        res += arguments[i]
    }
    return res//3因为是求和，所以要将结果返回
}
sum(1,2,3)


function sumWithArgs(...theArgs){
    console.log(theArgs , Array.isArray(theArgs))
    let res = 0;
    for(let i=0; i< theArgs.length; i++){
        res += theArgs[i]
    }
    return res
}
console.log(sumWithArgs(1,2,3,4,5))
console.log(sumWithArgs(1,2,3))

console.log('--------')
function sumWithArgsAndReduce(...theArgs){
    return theArgs.reduce( (acc ,next) =>  acc += next , 0)
}
console.log(sumWithArgsAndReduce(1,2,3,4,5))
console.log(sumWithArgsAndReduce(1,2,3))


let x = 10

function add (a){
    //x 在局部作用域内找不到，就回去全局作用域找，找到了就用
    // 局部作用域内的变量 只能在内部使用，外部访问会报错
    return a + x
}
//试着使用函数内部的变量
// console.log(a)//a is not defined

//试着访问一个没有声明的变量 
// console.log(notInited) //notInited is not defined

console.log(add(100)) // 110
x = 50
console.log(add(10)) //60

//局部和全局变量名字相同的时候，优先使用局部的，
// 因为使用变量的时候就是从内往外查找的

let n = 1

function min(n){
    return n -10
}

console.log(min(10)) //0 
console.log(n)


//自执行函数





// 箭头函数 

//没有参数 的写法
const hello = ( )=>{
    console.log('hello')
}
hello()
//一个参数 ()可以省略
const hello1 = name =>{
    console.log('hello' + name)
}
hello1('alex')
//多个参数 ()必须写
const helloMulti = (name , content)=>{
    console.log(`hello ${name} + ${content}`)
}
helloMulti('alex','how are you ')

//语句只有一行 可以省略大括号，并且同一行 默认return 
const increase = n => n +=1
console.log(increase(10))


//闭包
//1 内层函数里面引用外层函数的里面的变量,
//并且外层函数返回内层函数 ,也可以不返回，
//但是内部的函数要执行 不执行就会不去外层的作用域寻找变量
//https://stackoverflow.com/questions/500431/what-is-the-scope-of-variables-in-javascript 
//https://stackoverflow.com/questions/111102/how-do-javascript-closures-work/111114#111114
function squareSum(a,b){
    //计算一个数的平方
    function square(x){
        return x*x
    }
    //内部函数引用了 外层函数的 a,b，同时也被返回
    return square(a) + square(b)
}

//HOC Higher-order 和闭包是一个么？所以不是一个 todo   function 返回函数的函数
console.log(squareSum(2,4)) //20 
//2 向外暴露内部变量

const hello = ()=>{
    let name = 'alex'
    function _getName(){
        return name
    }
    return _getName
}
let getName = hello()
console.log(getName)  //ƒ _getName(){ return name }
//给name只读属性 
console.log(getName())

function createObject() {
    let x = 42;
    return {
      log() { console.log(x) },
      increment() { x++ },
      update(value) { x = value }
    }
  }
  
  const o = createObject()
  o.increment()
  o.log() // 43
  o.update(5)
  o.log() // 5
  const p = createObject()
  p.log() // 42

//   闭包和柯里化 todo 


let hello1 = name => console.log(name)
console.log(hello1 ,typeof hello1) //name => console.log(name) "function"
hello1('alex') // alex

var num1 = 10 
;(function(){
    //自执行函数会有自己的函数作用域，避免和全局同名变量冲突
    var num1 = 1
    console.log(num1)//1
})()
console.log(num1)//10

//IEFE Immediately Invoked Function Expression

let IEFE = (function(){
    console.log(1)
})()
let IEFE1 = +(function(){
    console.log(1)
})()
let IEFE2 = -(function(){
    console.log(1)
})()
let IEFE3 = ~(function(){
    console.log(1)
})()


// function getCounter(){
//     let count = 0
//     function addCount(){
//         count++
//     }
// }

// function getCounter1(){
//     let count = 0
//     function addCount(){
//         count++
//     }
//     addCount()
// }


// function getCounter2(){
//     let count = 0
//     function addCount(){
//         count++
//     }
//     return addCount
// }

function out(){
    function inner(){
        
    }
}




function getDataFromServer(cb){
    console.log('开始请求')          
    //                      在这里调用 实参            
    typeof cb ==='function' && cb('success')
}



//写法1  这里定义   形参 好处可以复用
function callback(res){
    console.log('我是回调')
    console.log( res)
}


getDataFromServer(callback)

//写法2 箭头函数 不利于复用
                // 形参
getDataFromServer( (res)=>{
    console.log(res)
})


let res = [1,2,3]
let result = []
// for(let i = 0; i< res.length; i++){
//     result.push(res[i] * 2)   
// }

result = res.map( x => x*2 )
console.log(res)

//实现一个简单的map 没有开始的参数校验和this的处理
// 1有返回值 所以要声明一个数组
// 2因为是高阶函数，所以要有一个回调函数cb
// 3因为是多个，所以循环处理。里面调用传进来回调函数,传递需要的值,将处理好的结果push进声明的数组里
// 4返回处理好的数组
Array.prototype._map = function(cb ){
    //Array.prototype 里面的this是数组实例 可以使用原型上的方法
    let result = []
    for(let i=0; i < this.length; i++){
        result.push( cb(this[i], i, this))
    }
    return result
}

res2 = res._map( x => x*2) //[2,4,6]
console.log(result)
console.log(res2)


//1函数也是对象？ 对象可以通过.添加属性 函数也可以，所以函数也是对象 但是通常不当对象使用，而是后面的例子里当参数传递
function f(a){console.log(a)}
//给函数一个time属性
f.time = new Date().toLocaleString()
console.log(f.name , f.time , typeof f, f instanceof Function, typeof Function ,Function instanceof Object)
//           f   2020/5/8 下午4:22:26 function   true               function             true
//2函数可以赋值给一个变量
let newF = f
newF(1) //1 
const myFirstFunc = () => 10
console.log(myFirstFunc()) //10
//3函数作为另一个函数的参数 也叫callback 
const mySecondFunc = (funcParam) => { 
  return console.log(funcParam())
}
// callback的应用？重点就是函数当参数或者返回值，在函数里面做具体的处理
// 例如 [1,2,3]._map( x => x*2)
// 1)处理Dom的事件 
    const clickHandler = (event) => { 
        console.log(`${event.target.id} is clicked`)
    }
    document.querySelector(‘#someId’)
    .addEventListener('click', clickHandler)
// 2) 处理ajax返回结果
//     串行的ajax里面，下次请求依赖上次的请求，
//     promise化
//     async/await 都是语法糖，将异步嵌套书写，变成顺序书写，本质还是回调套回调函数
// 3) HOC里面 函数作为另一个函数的参数或者返回值
    const mySecondHigherOrderFunc = (funcParam) => funcParam()
        
let newArr = [1,2,3].map( i => i*2 )
console.log(newArr) // [2,4,6]
//5 函数可以作为另一个函数的返回值
function test(){
    return () => console.log('Hello from returned function')
}
test() // Hello from returned function



// Without closure
const withoutClosure = () => {
    let counter = 0 
    return ++counter
}
console.log(withoutClosure()) // Prints: 1
console.log(withoutClosure()) // Prints: 1
console.log(withoutClosure()) // Prints: 1

// With closure
const myClosure = () => {
    let counter = 0
    return () => ++counter
}
const incrementCount = myClosure()
console.log(incrementCount()) // Prints: 1
console.log(incrementCount()) // Prints: 2
console.log(incrementCount()) // Prints: 3

//闭包实现函数内部name私有，外部想访问和修改只能通过内部暴露出去的函数来修改
const closure = () => {
    let name =  'name not set'
    return {
      setName: (value) => {name = value},
      getName: () => name
    }
}
const objFromClosure = closure()
console.log(objFromClosure.name) //Prints: undefined
console.log(objFromClosure.getName()) //Prints: name not set
console.log(objFromClosure.setName('New Name'))
console.log(objFromClosure.name) // Prints: undefined
console.log(objFromClosure.getName()) // Prints: New Name


// Map 
// Set
// Symbel 
// Reflect
// function*(){

// }
// Proxy




//创建数组
//1字面量 常用
let arr = [1,2,3]
console.log(arr) //[1,2,3]
// //2构造函数 
let arr2 = Array(3)
console.log(arr2)//[empty × 3]
// //3 new Array(3)
let arr3 = new Array(3)
console.log(arr3) //[empty × 3]
// //4 Array.of(3) 创建一个
let arr4 = Array.of(3) , arr4Multi = Array.of(3,4,5)
console.log(arr4) //[3]
console.log(arr4Multi)// [3,4,5]
// //5 Array.from({length:3}, (v,i)=> i) 快速创建多个数组使用
let arr5 = Array.from({length:3}, (v,i)=> i)
console.log(arr5)//[0,1,2]

let arr3Hello = Array.from({length:3}, (v,i)=> 'hello')
console.log(arr3Hello)//["hello", "hello", "hello"]


//数组的存取
let arr = [1,2,3]
console.log(arr[0], arr[1], arr[2])
arr[5] = '5' //会扩充数组长度
console.log(arr)

//用对象表示 obj = { key1 : val1 , key2: val2}
let items ={
    arrLen : arr.length,
    arrFirst : arr[0],
    arrLast : arr[arr.length -1],
    clearArr : arr = [],
    clearArr2 : arr.length = 0,
    arrCopy : arr.slice(),
    arrAnotherCopy : arr.slice(0)
}
console.log(items, items.arrCopy,items.arrAnotherCopy)

//数组删除元素

let arr = [1,2,3,4,5,6]
//删除最后一项
arr.length = arr.length-1
console.log(arr)//[1, 2, 3, 4, 5]

//删除指定下标的元素 比如下标为2的元素就是3 可以用数组内置的方法(可以直接用) splice
arr.splice(2, 1) // 3
console.log(arr) //[1,2,4,5]
//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
//从第 2 位开始删除 0 个元素，插入“drum”
let  myFish = ["angel", "clown", "mandarin", "sturgeon"];
myFish.splice(2, 0, "drum");
console.log(myFish)// ["angel", "clown", "drum", "mandarin", "sturgeon"]

//数组遍历
let myFish1 = ['hello','array'];

//for 循环
for(let i=0,len=myFish1.length; i<len; i++){
    console.log(myFish1[i])
}
//for of 循环
for(let i of myFish1){
    console.log(i)
}
//[].forEach((ele, index, arrSelf)=> {})
['hello','array'].forEach((ele, i, myFish)=>{
    console.log(ele,i ,myFish)
})


//js数组本身实现了栈和队列的功能和双端队列的功能
//栈模式 栈是一种后进先出LIFO( Last In First Out )的数据结构,进出都在栈顶操作，离栈顶远处的叫栈底
let stack = []
//入栈
stack.push(1)                   // | 3 | 
stack.push(2,3)                 // | 2 |   
console.log(stack)//[1,2,3]     // | 1 |
//出栈                                      
console.log(stack.pop()) //3从栈顶移除         // | 2 | 
                                             // | 1 |
console.log(stack.pop()) //2从栈顶移除
console.log(stack)//[1]
console.log(stack.pop()) //undefined
console.log(stack.pop())

//数组的队列模式,这里应是双端队列，既可以从尾部插入，可以从尾部删除
//既可以从头部插入元素，也可以从头部删除元素
let queue = []

queue.push(1,2,3)
console.log(queue)

//从头部移除一个元素
let firstRemoved = queue.shift()
console.log(firstRemoved)
console.log(queue)
//从头部添加一个元素
queue.unshift('first')
console.log(queue)



//indexOf 从前往后找基本类型在数组中的index
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));//1
console.log(beasts.indexOf('giraffe'))// -1

//lastindexOf  从后往前找基本类型在数组中的index 
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.lastIndexOf('Dodo'))//3
console.log(animals.lastIndexOf('Tiger'))//1
// //find  满足条件返回对应项，否则返回undefined
//找基本类型的那一项
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10)// 12
//找引用类型的那一项
var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];
console.log(inventory.find(fruit.name === 'cherries')); // { name: 'cherries', quantity: 5 }

// //findIndex  找到返回下标否则返回-1 
//找基本类型的索引
const array11 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array11.findIndex(isLargeNumber) , array1);//3  Array [5, 12, 8, 130, 44]


let names1 = ['alex','tom']
const iterator = names1.entries()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator)
for(let [key,value] of names1.entries()){
    console.log(key,value)
}

//反转数组
let testArr = [1,2,3]
console.log(testArr.reverse()) //[3, 2, 1]
//非数组先转成数组 再revese
let helloStr = 'hello'
let rervesedStr = helloStr
                    .split('')//字符串方法 按空字符串切割成数组
                    .reverse()//上一步变成数组了，可以使用数组方法 反转数组
                    .join('')// 数组方法 用空格拼接,将数组转成字符
console.log(rervesedStr) // olleh

let sortArr1 = [1,3,7,5]
console.log(sortArr1.sort() ,sortArr1)//[1,3,5,7] 升序 会改变原数组
console.log(sortArr1.sort( (a,b)=> a-b))//[1,3,5,7] 升序 会改变原数组
console.log(sortArr1.sort( (a,b)=> b-a)) //[7,5,3,1] 降序  会改变原数组

//数组排序 Array.portotype.sort
let sortArr = [4,2,3,1]
console.log(sortArr.sort())

//concat  拼接数组
let a1 = [1,2],a2 = [3,4,5]
console.log(a1.concat(a2), a1, a2)


//fill
const array11 = [1, 2, 3, 4];
// fill with 0 from position 2 until position 4
console.log(array11.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]
// fill with 5 from position 1
console.log(array11.fill(5, 1));
// expected output: [1, 5, 5, 5]
console.log(array11.fill(6), array1);
// expected output: [6, 6, 6, 6]


//toLocaleString
const array111 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array111.toLocaleString('en', { timeZone: 'UTC' });
console.log(localeString);//1,a,12/21/1997, 2:12:00 PM


//flat 扁平化数组
var arr1 = [1, 2, [3, 4]];
arr1.flat(); 
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

//使用 Infinity，可展开任意深度的嵌套数组
var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]





//every 都会遍历
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold), array1);// true , [1, 30, 39, 29, 10, 13] 不会改变原数组

// some 找到了就返回true 不一定全遍历
const array = [1, 2, 3, 4, 5];
// checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array.some(even), array) //true [1, 2, 3, 4, 5] 不会改变原数组







//slice 裁切 返回新的数组 不改变原数组
let arr12345 = [1,2,3,4,5]
console.log(arr12345.slice(), arr12345)//[1, 2, 3, 4, 5] (5) [1, 2, 3, 4, 5]
console.log(arr12345.slice(0))//[1, 2, 3, 4, 5] 复制数组
//包括前面 不包括后面
console.log(arr12345.slice(1))//[2, 3, 4, 5]
//-1 从右往左找第一个
console.log(arr12345.slice(1,-1)) // [2, 3, 4]

//filter
const words = ['spray', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result ,words);

//map  对每个元素操作 返回新的数组
const arr = [1,2,3]
const arr2 = arr.map( x=>x*2)
console.log(arr, arr2)//[1, 2, 3]  [2, 4, 6] 不改变原数组 返回新数组

//reduce 
console.log(arr.reduce( ( acc ,next )=> acc += next))  // 求和 6 
console.log(arr.reduce( ( acc ,next )=> acc += next, 100 ) ) //指定初始值求和 100+ 6 = 106

//数组解构

let numbers = [3,4,{name:1}]
let [a, b , c] = numbers
//取 对应的元素
console.log(a,b ,c)
//取剩余元素
let [a1, ...args] = numbers
console.log(a1, args)
// 取name的值 
let [,, {name}] = numbers
console.log(name) //1 



//二维数组
let arr = [ ['alex'], ['age']]
console.log(arr[0][0])// alex


//数组构造函数上的方法
console.log(Array.isArray(arr)) //false
console.log(Array.isArray("foobar")) //false
console.log(Array.of(7)) // [7]
console.log(Array.of(1, 2, 3) )// [1, 2, 3]
//生成指定长度对的数组 或者类数组转数组
console.log(Array.from({length:3}, (v,i)=> i)) //[0,1,2]
//Array.from(document.getElementsByName('div')) 

//
let name = 'alex'
let person = {
    name : name,
    sayName: function(){
        console.log(1)
    }
}
//key value相同的时候  或者简写function
let person={
    name,
    sayName(){
        console.log(1)
    }
}









let p = {
    name :'alex',
    age : 18,
    sayname(){
        console.log('1')
    }
}

let keys = Object.keys(p)
let values= Object.values(p)
console.log(keys,values)//(3) 
//["name", "age", "sayname"] (3) ["alex", 18, ƒ]

// for in 
for(let key in p ){
    console.log(key, p[key])
}

//判断对象自身是否含有某个属性 
let p= {}
console.log(p.hasOwnProperty('time'))//false
p.name = 'alex'
console.log(p.hasOwnProperty('name')) //true

https://juejin.im/post/5c94fef7f265da60fd0c15e8#comment 写自己的脚手架


let person={
    name,
    sayName(){
        console.log(1)
    }
}
console.log(Object.keys(person))//["name", "sayName"]
delete person.name
console.log(Object.keys(person))//["sayName"]



//writable 决定对象的属性是否可以赋值
"use strict";
const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

console.log(object1.property1) //42 
object1.property1 = 77;
console.log(object1.property1)
//Cannot assign to read only property 'property1' of object '#<Object>'




自定义 Setters 和 Getters
function Archiver() {
    var temperature = null;
    var archive = [];
  
    Object.defineProperty(this, 'temperature', {
      get: function() {
        console.log('get!');
        return temperature;
      },
      set: function(value) {
        temperature = value;
        archive.push({ val: temperature });
      }
    });
  
    this.getArchive = function() { return archive; };
  }
  
  var arc = new Archiver();
  arc.temperature; // 'get!'
  arc.temperature = 11;
  arc.temperature = 13;
  arc.getArchive(); // [{ val: 11 }, { val: 13 }]


  "use strict";

function _instanceof(left, right) { 
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { 
        return !!right[Symbol.hasInstance](left); } 
    else { 
        return left instanceof right; } 
}
function _classCallCheck(instance, Constructor) { 
    if (!_instanceof(instance, Constructor)) { 
        throw new TypeError("Cannot call a class as a function"); 
    } 
}
function _defineProperties(target, props) { 
    for (var i = 0; i < props.length; i++) {
         var descriptor = props[i]; 
         descriptor.enumerable = descriptor.enumerable || false;
         descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true; 
        Object.defineProperty(target, descriptor.key, descriptor); 
    } 
}
function _createClass(Constructor, protoProps, staticProps) {
     if (protoProps) _defineProperties(Constructor.prototype, protoProps);
     if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
function () {
//     _createClass(PersonEs5, null, [{
//         key: "hello",
//         //添加构造函数上的方法 用static 用上面将过的对象省略key的写法
//         value: function hello() {
//           console.log('hello');
//         }
//       }]);
    
//       function PersonEs5(name, age) {
//         _classCallCheck(this, PersonEs5);
//         this.name = name;
//         this.age = age;
//       }
//       _createClass(PersonEs5, [{
//         key: "sayName",
//         value: function sayName() {
//           return this.name;
//         }
//       }]);
    
//       return PersonEs5;
//     }();


//实例 构造函数 原型直接的关系

// function Person(name,age){
//     this.name = name
//     this.age = age
// }


// let p1 = new Person('alex',18)

// //实例 构造函数 原型的关系
// //每个实例上面都有__proto__ 属性可以访问到对应构造函数所属的原型
// //每个原型上都有一个cousuctor属性 指向对应的构造函数
// //构造函数通过prototype属性访问对应的原型 

// 原型也可以是实例，所以原型也可以继续访问__proto__向上查找 找不到返回null

// 原型链
// 就是当实例要访问属性或方法的时候,会现在自己范围内找，
// 找不到通过__proto__ 属性去对应构造函数所属的原型里面找,
// 再找不到再通过原型的__proto__再向上找，找不到返回undefined

// 例子:
// 访问实例的自身的属性 p1.name //自己有 直接输出
// 访问实例的toString方法 p1.toString //自己没有 就会沿着原型链去原型上找，找到了 返回 是一个函数
// 访问自己没有的属性 p1.age //自己没有 沿着原型链找，都找了以后没有 返回undefined


// //构造函数(成为 constructor)和普通函数的区别？
// 1. 构造函数使用new关键字调用；普通函数不用new关键字调用；
// 2. 构造函数内部可以使用this关键字；普通函数内部不建议使用this，
// 因为这时候this指向的是window全局对象，这样无意间就会为window添加了一些全局变量或函数
// 3. 构造函数默认不用return返回值；普通函数一般都有return返回值
//     3.1 构造函数会默认返回this，也就是新的实例对象
//     3.2 构造函数显示加return关键字，返回的类型是对象就返回对象，是基本类型就返回基本类型

// 普通函数: 不使用new运算符的函数就是普通函数






let person = {
    name :'alex',
    age : '18'
}
Object.defineProperty(person, 'info', {
    get(){
        return this.name + " " + this.age
    },
    set(info){
        let [name,age] = info.split(" ")
        this.name = name
        this.age = age
    }
})

console.log(person)

console.log(person.info) //alex 18
person.info = "tom 22"
console.log(person.info)//tom 22

// function SuperClass(){}
// function OtherSuperClass(){}

// function MyClass() {
//     SuperClass.call(this);
//     OtherSuperClass.call(this);
// }

// // 继承一个类
// MyClass.prototype = Object.create(SuperClass.prototype);
// // 混合其它
// Object.assign(MyClass.prototype, OtherSuperClass.prototype);
// // 重新指定constructor
// MyClass.prototype.constructor = MyClass;

// MyClass.prototype.myMethod = function() {
//     // do a thing
// };

//原型最后指向的是null 我们直接指定null就会创建一个空的对象
let a = Object.create(null)
console.log(a)
console.log({})
// // 以字面量方式创建的空对象就相当于:
// // Object.create(Object.prototype);
console.log(Object.create(Object.prototype))




function Person(name,age){
    this.name = name
    this.age = age 

}

Person.prototype.sayName = function(){
    console.log(this.name)
}

Person.prototype.one = function(){
    return 1
}

let person = new Person('alex', 18)
let student = Object.create(person)


//for in 可以遍历原型上的方法和属性
for(let keyStu in student){
    console.log(keyStu, student[keyStu])
}
console.log(student.time)

student ={
    name: 'tom',
    age:'20'
}

console.log(student)
//只遍历自己的属性和方法
for(let key in student){
    if(student.hasOwnProperty(key)){
        console.log(key, student[key])
    }
}




//对象的解构
let  blog ={
    name : '第一篇博客',
    content:{
        value :'this is content'
    },
    users:[
        {
            userId :1,
            name : 'user1'
        },
        {
            userId :2,
            name : 'user2'
        },
        {
            userId :3,
            name : 'user3'
        }
    ]
}

//name  : blogName 名字重复用别名 : 
//取用户的第二项的名字
let { name  : blogName ,
      content :{ value},
      users:[ , {name}]} = blog
console.log(blogName) //第一篇博客
console.log(value) //this is content
console.log(name) //user2 

//变量用[]  别名用 : 
function getvalById(idKey, obj){
    let {[idKey] : id } = obj
    return id
}
console.log(getvalById('name' ,{name:'alex'})) //alex


// // 解构对象时会查找原型链（如果属性不在对象自身，将从原型链中查找）
// 声明对象 和 自身 self 属性
var obj = {self: '123'};
// 在原型链中定义一个属性 prot
obj.__proto__.prot = '456';
// test
const {self, prot} = obj;
console.log(self,prot) 
// self "123"
// prot "456"（访问到了原型链）



//值传递和引用传递

function byReference( r) {
    if(Array.isArray(r)){//array
        r[0] ='change'
    }else if(typeof r ==='object' && r !== null){//object
        if(r && r.name){
            r.name = 'changeName'
        }
    }
}

let arr = [1,2,3]
let obj = {id:1, name :'alex'}
byReference(arr)
byReference(obj)
console.log(arr[0], obj.name ) // change changeName 改变了

function byReferenceStr(a){
    a = '1' 
}

//这个不会修改
let str = 'test'
byReferenceStr(str)
console.log(str ,typeof str,  typeof str.toUpperCase) 
//test  string function

//基本类型不会变
function byValue(num){
    num  = 10
    console.log(num)
}
let testNum = 1
byValue(testNum)
console.log(testNum) //1 不变

//
let person = {
    name :'alex',
    sayName :function(){
        console.log(`name 是 ${this.name}`)
    },
    say(){ console.log(`arrow say ${this.name}`)},
    group:{
        name :'groupName',
        logName(){
            console.log(`group name is ${this.name}`)
        }
    }
}
function windowSayName(){
    console.log(`windonw say name is : ${this.name}`)
}
console.log(person.sayName()) // name 是 alex
console.log(person.say())//arrow say alex
console.log(person.group.logName()) //group name is groupName 
//没输出 因为window上没有name
console.log(windowSayName())//windonw say name is :  



//call apply bind   修改this 指向
let person = {
    name :'alex',
}
function windowSayName(age,group){
    console.log(`windonw say name is : ${this.name},age:${age},group:${group}`)
}
console.log(windowSayName.call(person , 18,'fe' ))
//windonw say name is : alex,age:18,group:fe

console.log(windowSayName.apply(person, [18, 'fe']))
//windonw say name is : alex,age:18,group:fe 

console.log( typeof windowSayName.bind(person, [18, 'fe']) )// function
console.log( typeof windowSayName.bind(person, [18, 'fe'])() )
//windonw say name is : alex,age:18,fe,group:undefined


class PersonEs5{
    constructor(name ,age){//定义构造方法
        this.name = name
        this.age = age
    }
    sayName(){console.log(this.name)}//定义方法
}
let p = new PersonEs5('alex',18)
console.log(p)
//实现继承
//一个子类只能继承一个父类
class Student extends PersonEs5{
    //静态属性或者方法  static 关键字声明 不用new 直接通过类名可以访问到  方便使用
    // 相当于命名空间 避免变量冲突
    static count = 0// 静态属性
    static addCount(){// 静态方法  
        student.count++
    }
    constructor(name, age ,sex){
        super(name,age)//调用父类的构造函数
        this.sex =sex//扩展自己的方法
    }
    sayName(){// 同名方法 不会去父类上找了
        super.sayName() //如果子类需要调用父类的其他方法，可以这么写
        console.log('stu sayName')
    }
}
let stu = new Student('tom', 10,'男' )
console.log(stu.name)
stu.name ='new name'
console.log(stu, Student.count)

//字符串
let str = ' hello  '
let strDouble = "sadhappy"
let strObj = new String('你好')
console.log(str, strObj, str.length)

//转义

let str2 = " 这是一段 '字符'"
let str22 = " 这是一段 \\'字符\\' \t \n"
//遍历
for(let i=0; i<str.length; i++){
    console.log(str[i])
}

for(let key of str){
    console.log(key)
}

//裁切
// str.substring()
// str.slice()
//大小写转换
str.toUpperCase()
str.toLocaleLowerCase()
//去掉首尾空格 
str.trim()

//字符串拼接
let str1 = '1', str2 = '2'
console.log(`str is ${str1} ${str2}`)
console.log(str1.concat('hello','world'))



//正则


let str = '0123123123helloworld';
//不用正则 找出所有数字
let num = [...str].filter( s => !Number.isNaN(parseInt(s))).join("")
console.log(num)//0123123123

//使用正则
console.log(str.match(/\d/g).join(""))//0123123123

// //字面量声明 缺点不方便传参数
// let numReg = /\d/;
let numReg = new RegExp('')



//内置对象

let str = '123', str1 = '12.3'
console.log(Number(str), Number.parseFloat(str1))
console.log(Number.isNaN(str))
let num = 12.324234
let numStr = num.toFixed(2)
console.log(numStr)

console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_VALUE)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)


// Math 数学相关的 常用方法
console.log(Math.PI)//3.141592653589793
//绝对值
console.log(Math.abs(-1)) //1
console.log(Math.sin(Math.PI /2)) //1

//向上取整
console.log(Math.ceil(.99)) //1
//向下取整 
console.log(Math.floor(1.99)) //1
//随机数 返回一个 0 到 1 之间的伪随机数。
console.log(Math.random())

//返回一个数的 y 次幂。
console.log(Math.pow(10,2))//100

//返回一个数的整数部分，直接去除其小数点及之后的部分。
console.log(Math.trunc(9.45)) // 9


//Date
let date = new Date()
//get 
console.log(date)
console.log(date.getFullYear()) // 2020
console.log(date.getMonth()) // 4  + 1 = 5月 0-11 需要加一
console.log(date.getDay())//周几 0 
console.log(date.getDate())//几号  10 

console.log(date.getHours()) //20
console.log(date.getMinutes()) //56
console.log(date.getSeconds()) //32
// 1970到现在的毫秒数
console.log(date.getTime()) //1589115447269
//本地表示方法
console.log(date.toLocaleDateString()) //2020/5/10
//set 
console.log(date.setFullYear(2030))
console.log(date.toLocaleDateString())//2030/5/10

date.setTime(1404648371937)
console.log(date.toLocaleDateString())//2014/7/6

//
let postJSON = `{
    "id" : 1,
    "title" : "标题",
    "comments":[
        {
            "userId":1,
            "comment":"评论1"
        },
        {
            "userId":2,
            "comment":"评论2"
        }
    ],
    "isPublished" : false,
    "author": null
}`
//转成json对象
console.log(JSON.parse(postJSON))
let JSONObj ={
    name:'alex',
    skills:['js','html','css']
}
//输出 js字符串
console.log(JSON.stringify(JSONObj))

//格式化输出
console.log(JSON.stringify(JSONObj, null, 2))
//简单判断 json字符串是否合法
const isJSON = (jsonStr)=>{
    if(typeof jsonStr  ==='string'){
        try{
            if(typeof  JSON.parse(jsonStr)){return true}
        }catch(e){
            return false
        }
    }
}
console.log(isJSON(postJSON))


//Set  的curd
let arr = [1,1,2,3,3,4,4]
console.log([...new Set(arr)])//数组去重 [1, 2, 3, 4] 

let set = new Set()
set.add(1)
set.add(2)
set.add(4)
console.log(set) //Set(3) {1, 2, 4}
set.add(4)//添加重复的元素 不会生效
console.log(set)//Set(3) {1, 2, 4}
//判断是否含有
console.log(set.has(2), set.has(10)) // true false

//遍历
set.forEach( val => console.log(val)) //1 2 4 

//清空
set.clear()
console.log(set ,set.size)//Set(0) {} 0

//set 里面的元素是对象
let obj1 = {id :1} , obj2 = {id:1}
set.add(obj1)
set.add(obj2)
console.log(set)
set.add(obj1)
console.log(set)


let map = new Map()
let objKey = {key : 2}
map.set(1,'val1')
map.set( objKey ,'val2')
map.set('key 3', 'val 3')
console.log(map)

//通过key获取值 key可以是变量
console.log(map.get(1), 
         map.get(objKey),
         map.get('key 3'),
         map.get('123'))//val1 val2 val 3 undefined
//通过key判断是否含有 返回布尔值         
console.log(map.has(objKey)) //true
map.forEach( (val, key) => 
    console.log(key, val)
)
//迭代器
let iterator = map.entries()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

//for of 遍历
for(let [key, val] of map){
    console.log(key, val)
}

//异常处理 

//ok
try{
    console.log('ok')
}catch(err){
    console.log(err)
}

//程序异常
try{
    const a = 1
    a =2 
}catch(e){
    console.log(e)
}

// ok always
try{
    console.log('ok')
}catch(err){
    console.log(err)
}finally{
    console.log('always')
}

//throw 主动抛出异常
//diy err always 如何走到catch里面 ？ try里面主动抛出错误
try{
    throw new Error('diy err')
    console.log('ok')
}catch(err){
    console.log(err)
}finally{
    console.log('always')
}

console.clear()
//自定义异常
class ErrorApi extends Error{
    constructor(url , ...args){
        super(...args)
        this.url = url
        this.name = 'errorApi'
    }
}

function getPostData( url = '/post/blogs', code = '404'){
    console.log('开始获取数据...')
    console.log(aaa)
    throw new ErrorApi(url, code)
}

try {
    getPostData()
} catch (e) {
    // instanceof 处理不同类型的异常
    if( e instanceof ReferenceError){
        console.log('程序异常')
    }else if(e instanceof ErrorApi){
        console.log('API 异常')
    }
}


//同步异步
//setTimeout 指定秒后执行
let timer1 = setTimeout(()=> console.log('1s后执行'), 1000)
console.log(timer1)
console.log('第一行代码')
console.log('第二行代码')


//clearTimeout + timerId 中断代码执行
setTimeout( ()=>{
    if(timer1){
        clearTimeout(timer1)
        console.log('中断了timer1的执行')
    }
},500)


//setInterval 每隔多少秒执行
let intervalId = setInterval( ()=>{
    let date = new Date()
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
},1000)

//15秒后停止 
setTimeout(()=>{
    intervalId && clearInterval(intervalId)
},15000)


//Promsie + then 成功的处理
// let delay = (time) => new Promise( succ =>{
//     setTimeout( ()=>{ succ('success after ' + time * 1000)}, time * 1000)
// })

// console.log(1)
// delay(2).then( res => console.log(res))
// console.log(2)

// //错误处理
let delay = (time) => new Promise( (succ ,fail)=>{
    setTimeout( ()=>{ fail('fail after ' + time * 1000)}, time * 1000)
})

console.log(1)
delay(2).then( res => console.log(res))
        .catch( err => console.log(err + 'catch 捕获错误')) //捕获错误
console.log(2)



//promsie 链式调用 catch 可以写在最后一个then的后面
// console.log('strat')
// new Promise( (resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(1)
//     }, 1000)
// }).then( res =>{
//     console.log(res) //1
//     return res + 10
// }).then( res =>{
//     console.log(res) //11
//     return new Promise( resolve => resolve( res + 20))
// }).then( a =>{
//     console.log(a) //31 
// })
// console.log('end')

// then catch 以后还会返回一个新的promise
//promsie  catch可以捕获 promise里面 或者then里面的错误 可以写在最后一个then的后面
console.log('strat')
new Promise( (resolve, reject)=>{
    setTimeout(()=>{
        // reject('reject in 1')//捕捉 promsie里面的错误
        resolve(1)//捕捉 promsie里面的错误
    }, 1000)
}).then( res =>{
    console.log(res) //1
    throw 'then 异常'
    return res + 10
}).then( res =>{
    console.log(res) //11
    return new Promise( resolve => resolve( res + 20))
}).then( a =>{
    console.log(a) //31 
}).catch( err =>{
    // console.log(err)//reject in 1
    console.log(err)//then 异常
})
console.log('end')


let p1 = new Promise( resolve =>{
    setTimeout( ()=>{
        resolve(1)
    },1000)
})

let p2 = new Promise( resolve =>{
    setTimeout( ()=>{
        resolve(2)
    },1000)
})


let p3 = new Promise( resolve =>{
    setTimeout( ()=>{
        resolve(3)
    },1000)
})

Promise.all([p1, p2, p3])
        .then( res =>{
            let [a,b, c] = res
            console.log(a,b,c)
        })

*/

async function as1() {
  try {
    let result2 = await as2();
    let result3 = await as3();
    console.log(result2); // 10
    console.log(result3); // 333
  } catch (e) {
    console.log(e);
  }
}

async function as2() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}

async function as3() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(333);
    }, 500);
  });
}
as1();
