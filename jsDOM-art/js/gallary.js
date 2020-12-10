function preparePlaceholdder(){
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById('imageGallery')) return false;

    var placeholder = document.createElement('img')
    placeholder.setAttribute('id', 'placeholder')
    placeholder.setAttribute('src', "images/pc.png")
    placeholder.setAttribute('alt', "my image gallery")

    var description =  document.createElement('p')
    description.setAttribute('id', 'description')
    var desText = document.createTextNode('Choose an image')
    description.appendChild(desText)

    var gallery = document.getElementById('imageGallery')
    //gallery  placeholder des
    insertAfter( placeholder ,gallery)
    insertAfter(description, placeholder)

}


function prepareGallery(){
    if(!document.getElementsByTagName) return false 
    if(!document.getElementById) return false 
    if(!document.getElementById('imageGallery')) return false

    var   gallery = document.getElementById('imageGallery')
    var links = document.getElementsByTagName('a')
    for( var i=0; i< links.length; i++){
        links[i].onclick = function(){
            return showPic(this)
        }
        links[i].onkeypress = links[i].onclick
    }
}

function showPic(whichPic){
    if(!document.getElementById('placeholder')) return false 
    var source = whichPic.getAttribute('href')
    placeholder.setAttribute('src', source)

    var des = document.getElementById('description')
    if(!des)   return  false
    
    var text = whichPic.getAttribute('title')
    text = text || ''

    if(des.firstChild.nodeType === 3){
        des.firstChild.nodeValue = text
    }
    return false 
}

addLoadEvent(preparePlaceholdder)
addLoadEvent(prepareGallery)

/**
 * 
 * 总结：
 * 这两个是通用的函数封装在一个公共文件里面  先其他用到的地方引入 
 *      1. insertAfter 前提有一个存在的元素 再html里面
 *      2. window.onload 封装 支持多个 
 * 具体的业务逻辑再单独抽离一个js
 *      1. 动态创建新的dom元素 插入到对应的容器里面 
 *      2. 命名要保持一致的同时又有自己的个性
 *      3. 参数校验和api支持情况的检测
 * 公共函数js先引入 再引入具体的业务逻辑的js
 * 样式js 与html分离 方便修改 以及维护
 * 
 * ajax实现内容的动态加载
 *      ajax : XMLHttpRequest 对象 充当浏览器中的脚本与服务器中间人的角色 以往的请求都是浏览器发出的
 *             而js通过这个对象可以自己发送请求，也可以自己处理响应
 */
