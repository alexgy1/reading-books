function getHttpObject(){
    if(typeof XMLHttpRequest == 'undefined'){
        try {
            return new ActiveXObject('Msxl2.XMLHTTP.6.0')
        } catch (e) {
        
        }

        try {
            return new ActiveXObject('Msxl2.XMLHTTP.3.0')
        } catch (e) {
            
        }

        try {
            return new ActiveXObject('Msxl2.XMLHTTP')
        } catch (e) {
        
        }
    }
    return new XMLHttpRequest
}

