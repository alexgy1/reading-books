function positionMessage(){
    if(!document.getElementById) return  false
    if(!document.getElementById('message')) return false

    var elem = document.getElementById('message')

    elem.style.position = 'absolute'
    elem.style.left = '50px'
    elem.style.top = '100px'

    moveElement('message', 200, 300, 10 )


    var elem2 = document.getElementById('app2')

    elem2.style.position = 'absolute'
    elem2.style.left = '20px'
    elem2.style.top = '200px'

    moveElement('app2', 400, 600, 10 )

    //加额外的函数的调用 就可以实现新的功能，  这就是函数封装的好处 
}

addLoadEvent(positionMessage)