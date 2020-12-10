function getContent(){
    var request = getHttpObject()

    if(request){
        request.open('GET', 'example.txt', true)
        request.onreadystatechange = function(){
            if(request.readyState == 4){
                // alert('res success') 理解异步的执行顺序
                _handleRes(request.responseText)
            }
        }
        request.send(null)
    }else{
        alert('your browser doesn\'t support  ')
    }
}


function _handleRes(res){
    var para = document.createElement('p')
    var txt  = document.createTextNode(res)
    para.appendChild(txt)
    document.getElementById('new').appendChild(para)
}
// alert('add  ')
addLoadEvent(getContent)

/**
 * 
 * 
 * request.readyState 浏览器会在不同阶段更新 readyState属性的值,  它有五个可能的值
 * 0 表示未初始化
 * 1 表示正在加载
 * 2 表示加载完毕
 * 3 表示正在交互
 * 4 表示完成
 * 
 * 只要 readyState 变成4 就可以访问服务器发送回来的数据了
 * 
 * 访问服务器发回来的数据 要通过亮哥哥属性完成 一个是 responseText 属性， 用于保存文本字符串形式的数据 
 * 另一个属性是 repsoneXML属性， 用于保存Content-Type 头部中指定为text/html 的数据， 其实是一个documentFragment对象
 * 你可以使用DOM的各种方法来处理这个对象，而这也正是XMLHttpRequest这个名称里有XML的原因 
 * 
 * 
 * 这个例子中 onreadystatechange 事件处理函数 在等到readyState值变成4之后 就会从responseText 属性里取得文本数据
 * 然后把数据放到一个段落中， 再将新的段落添加到DOM里面
 * 
 * 
 * ajax 使得用户无需刷新页面，从而很快的得到响应， 减少页面重复加载的次数 缺少状态记录
 * 无法使用后退按钮或者 无法为特定状态下得到页面添加书签
 * 每次操作得到一个清晰明确的结果， 
 */