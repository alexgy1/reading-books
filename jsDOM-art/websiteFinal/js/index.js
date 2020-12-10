

function prepareSlideShow(){
    if(!document.getElementsByTagName) return false 
    if(!document.getElementById) return false 
    if(!document.getElementById('navigation') ) return false

    var intro  = document.getElementById('intro')
    var slideShow = document.createElement('div')
    slideShow.setAttribute('id', 'slideShow')
    var frame = document.createElement('img')
    frame.setAttribute('src', 'images/band.png')
    frame.setAttribute('alt','')
    frame.setAttribute('id','frame')
    // slideShow.appendChild(frame)

    var preview = document.createElement('img')
    preview.setAttribute('src', 'images/band.png')
    preview.setAttribute('alt', '')
    preview.setAttribute('id', 'preview')

    slideShow.appendChild(preview)
    insertAfter(slideShow, intro)

    var links = document.getElementsByTagName('a')
    for(let i=0; i< links.length; i++){
        links[i].onmouseover = function(){
            var des = this.getAttribute('href')
            if(des.indexOf('index.html') > -1){
                moveElement('preview', 0,0,5)
            }
            if(des.indexOf('about.html') > -1){
                moveElement('preview',-150,0,5)
            }
            if(des.indexOf('photos.html') > -1){
                moveElement('preview',-300,0,5)
            }
            if(des.indexOf('live.html') > -1){
                moveElement('preview',-450,0,5)
            }
            if(des.indexOf('contact.html') > -1){
                moveElement('preview',-600,0,5)
            }
        }
    }
}
addLoadEvent(prepareSlideShow)