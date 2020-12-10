function addLoadEvent(func){
    //一个队列 但是里面的函数会被覆盖 不会执行？ 
    let oldonLoad = window.onload
    if(typeof window.onload !=='function'){
        window.onload = func
    }else{
        window.onload = function(){
            oldonLoad()
            func()
        }
    }
}

//insertAfter(newEle, targetEle) 
function insertAfter(newEle, targetEle){
    let parent = targetEle.parentNode
    try {
            if(parent.lastChild == targetEle){
                parent.appendChild(newEle)
            }else{
                // targetEle is not the last ele meaning is must have the nextSibling
                parent.insertBefore(newEle, targetEle.nextSibling)
            }
    } catch (e) {
        console.log(e)
    }
}     


function getNextElement(node){
    if(node.nodeType == 1){
        return node 
    }
    if(node.nextSibling){
        return getNextElement(node.nextSibling)
    }
    return null 
}


function addClass(ele, value){
    if(!ele.className) ele.className = value
    let newClassName = ele.className

    newClassName += ' ' + value
    ele.className  = newClassName
}




//
function styleElementSiblings(tag,theClass){
    if(!document.getElementsByTagName) return false
    var elems = document.getElementsByTagName(tag)

    for(var i=0; i< elems.length; i++){
        var elem = getNextElement(elems[i].nextSibling)
        addClass(elem, theClass)
    }
}


//moveElement
function moveElement(eleId, final_x, final_y, interval){
    if(!document.getElementById) return false 
    if(!document.getElementById(eleId)) return false
    var elem = document .getElementById(eleId)

    if(!elem.style.left ) elem.style.left = '0px'
    if(!elem.style.top ) elem.style.top = '0px'

    if(elem.movement) clearTimeout(elem.movement)

    var xpos = parseInt(elem.style.left)
    var ypos = parseInt(elem.style.top)

    if(xpos == final_x && ypos == final_y){
        return true
    }

    // if(xpos < final_x) xpos++
    // if(xpos > final_x) xpos--

    // if(ypos < final_y) ypos++
    // if(ypos > final_y) ypos-- 
   
    //change the add distance in x and y direction 
    if(xpos < final_x){
        var diffX1 = final_x - xpos

        xpos += Math.ceil(diffX1/10)
    }
    if(xpos > final_x){
        var diffX2 = xpos - final_x
        xpos -= Math.ceil(diffX2/10)
    }

    if(ypos < final_y) {
        var dY1 = final_y - ypox

        ypos += Math.ceil(dY1)
    }

    if(ypos > final_y){
        var dY2 = Math.ceil(ypos - final_y)
        ypos -= dY2
    }


    elem.style.left = xpos + 'px'
    elem.style.top = ypos + 'px'

    //这里的函数名字要加字符串 而且不能有空格
    var repeat = "moveElement(  '" + eleId  + "' ," + final_x +"," +  final_y + ","  + interval + ")"

    //自定义属性解决这个问题 公共的变量变成 每个元素私有的属性 互相不干扰
    elem.movement = setTimeout(repeat, interval)

}