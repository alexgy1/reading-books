/**
 * 
 * @param {*} node  hmml element
 * @param {*} className  className
 */
function diyClassNames(node, className){
    if(document.getElementsByClassName){
        return node.getElementsByClassName(className)
    }

    let oAllEles = node.getElementsByTagName('*')
    let res = []
    
    for(let i=0 , len=oAllEles.length; i<len; i++){
        let now = oAllEles[i]
        if(now.className.indexOf(className)> -1){
            res.push(now)
        }
    }
    return res 
    
}