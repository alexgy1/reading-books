function   showSection(id){
    var divs = document.getElementsByTagName('div')

    for(var i=0; i<divs.length; i++){
        if(divs[i].className.indexOf('section') == -1) continue

        if(divs[i].getAttribute('id') !=id){
            divs[i].style.display = 'none'
        }else{
            divs[i].style.display = 'block'
        }
    }
}

function prepareInternalNav(){
    if(!document.getElementById) return false
    if(!document.getElementById('internalnav'))return false
    if(!document.getElementsByTagName) return false

    var nav  = document.getElementById('internalnav')
    var links = nav.getElementsByTagName('a')
    for(var i=0; i<links.length; i++){
        var id = links[i].getAttribute('href').split('#')[1]
        if(!document.getElementById(id)) continue
        document.getElementById(id).style.display = 'none'
        links[i].destination = id
        links[i].onclick = function(){
            showSection(this.destination)
            return false
        }
    }
 }

 function highlightPage(){
    if(!document.getElementsByTagName) return false 
    if(!document.getElementById) return false 
    if(!document.getElementById('navigation') ) return false

    var nav = document.getElementById('navigation') 

    var links = nav.getElementsByTagName('a')

    for(var i=0; i<links.length; i++){
        var linkUrl = links[i].getAttribute('href')
        var currentUrl = window.location.href

        if(currentUrl.indexOf(linkUrl) > -1){
            links[i].className = 'here'
        }
    }
}



addLoadEvent(highlightPage)
addLoadEvent(prepareInternalNav)