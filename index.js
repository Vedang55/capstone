var a = document.querySelector('.num');
var b = document.querySelector('.bar');
a.addEventListener('click',buttonclk)
b.addEventListener('click',buttonclk)
var inputField = document.querySelector('#inputField');
var answerField = document.getElementById("answerfield")
var operators = ['x','-','+','/'];
var cbtn = document.getElementById("cbtn");
var cbtnc = 0;

cbtn.addEventListener("mousedown", regt);
cbtn.addEventListener("mouseup", dregt);
cbtn.addEventListener("touchstart", regt);
cbtn.addEventListener("touchend", dregt);
cbtn.addEventListener("touchcancel", dregt);
cbtn.addEventListener("touchcancel", dregt);
cbtn.addEventListener("touchleave", dregt);

	

var tout;
function regt(){
    cbtnc = 1;
    clearTimeout(tout);
    tout = setTimeout(function(){
        if(cbtnc == 1){
            inputField.value = "";
            answerField.innerHTML = "";
        }
    },700);
}

function dregt() {
    cbtnc = 0;
    clearTimeout(tout);
}





function buttonclk(event){
        var elementClicked = event.target.innerHTML;
        if(event.target.tagName != 'BUTTON' || (['/','x','+'].includes(event.target.innerHTML) && inputField.value === "" )){
            return;
        }

        if(elementClicked != 'C' && elementClicked != '=' ){
            if(operators.includes(elementClicked) && operators.includes(inputField.value[inputField.value.length - 1])){
                inputField.value = inputField.value.substring(0, inputField.value.length - 1) + elementClicked;
            }
            else{
                inputField.value = inputField.value + elementClicked; 
            }
            updateField();
        }
        else if(elementClicked === 'C') {
            if(inputField.value.length > 1){
                inputField.value = inputField.value.substring(0, inputField.value.length - 1);
                updateField();
            }
            else {
                inputField.value = "";
                answerField.innerHTML = "";
            }         
            
        }
        else if(elementClicked === '='){
            inputField.value = answerField.innerHTML;
            answerField.innerHTML = "";

        }

}

function updateField(){  
    try{
        
    
        answerField.innerHTML = eval(inputField.value.replace(/x/g,'*'));
        if(answerField.innerHTML != inputField.value){
            
        }
        else{
            answerField.innerHTML = "";
        }
    }
    catch(e){
        if(eval(inputField.value.substring(0, inputField.value.length - 1).replace(/x/g,'*')) == inputField.value.substring(0, inputField.value.length - 1)){
            answerField.innerHTML = "";
        }
    }

    if(inputField.value.length*60 > window.screen.width){
        inputField.style.fontSize = "5vh"; 
    }
    else{
        inputField.style.fontSize = "10vh"; 
    }



    inputField.focus();

}





