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