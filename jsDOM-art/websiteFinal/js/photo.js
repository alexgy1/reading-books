function showPic(whickPic){
    if(!whickPic || !whickPic.getAttribute('href') ) return  false 
    let imgSrc =  whickPic.getAttribute('href') 
    let title = whickPic.getAttribute('title') || 'default title'

    let plachholder = document.getElementById('real')
    let des = document.getElementById('des')

    plachholder.setAttribute('src', imgSrc)
    if(des && title){
        des.innerHTML = title
    }
 }

 function handlePopup(){
     if(!document.getElementsByTagName) return false // 向后兼容
     let oAs =document.getElementsByTagName('a')
     if(oAs.length > 0){
        for(let i=0; i< oAs.length; i++){
         let classPopup = oAs[i].getAttribute('class')
            if(classPopup == 'popup'){
                 oAs[i].onclick = function(){
                    // popUp(this.getAttribute('href'))
                    showPic(this)
                    return false;// 阻止href 跳转
                } 
               
            }
        }
     }
 }
 addLoadEvent(handlePopup)