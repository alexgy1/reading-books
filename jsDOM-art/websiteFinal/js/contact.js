function focusLabels(){
    if(!document.getElementsByTagName) return false
    var labels = document.getElementsByTagName('label')
    for(var i=0; i< labels.length; i++){
        if(!labels[i].getAttribute('for')) continue
        labels[i].onclick = function(){
            var id = this.getAttribute('id')
            if(!document.getElementById(id)) return false
            var element  = document.getElementById(id)
            element.focus()
        }
    }
}

//reset fields 
function resetFields(whichForm){
    for(var i=0; i<whichForm.elements.length; i++){
        var ele = whichForm.elements[i]
        if(ele.type == 'submit') continue
        if(!ele.defaultValue ) continue
        ele.onfocus = function(){
            if(this.value == this.defaultValue){
                this.value = ''
            }
        }
        ele.onblur = function(){
            if(this.value == ''){
                this.value = this.defaultValue
            }
        }
    }
}


//validate form 
//糟糕的表单不如根本没有检查
// 不要完全依赖js 它代替不了服务端的校验
function isFilled(field){
    if(field.value.length < 1 || field  .value == field.defaultValue){
        return false
    }else{
        return true
    }
}

function isEmail(field){
    if(field.value.indexOf ('@') > -1 || field.value.indexOf('.') > -1){
        return true
    }else{
        return false
    }
}

function validateForm(whichForm){
    for(var i=0; i<whichForm.elements.length; i++){
        var ele = whichForm.elements[i]

        if(ele.className.indexOf('required') > -1){
            if(!isFilled(ele)){
                alert('please fill in the ' + ele.name +'field')
                return false
            }
        }
        if(ele.className.indexOf('email') > -1){
            if(!isEmail(ele)){
                alert( ele.name + 'must be a valid email address')
                return false
            }
        }
    }
    return true   
}

function prepareForms(){
    for(var i=0; i<document.forms.length; i++){
        var thisForm = document.forms[i]
        resetFields(thisForm)
        thisForm.onsubmit = function(){
            return validateForm(this)
        }
    }
}

//脚本足够健壮 是否足够的预留退路才是重要的
//最重要的原则是必须把 结构层 表示层 行为层分离开


addLoadEvent(focusLabels)
addLoadEvent(prepareForms)