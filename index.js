var a = document.querySelector('.num');
var b = document.querySelector('.bar');
a.addEventListener('click',buttonclk)
b.addEventListener('click',buttonclk)
var inputField = document.querySelector('#inputField');
var answerField = document.getElementById("answerfield")
var operators = ['x','-','+','/'];


function buttonclk(event){
        var elementClicked = event.target.innerHTML;
        if(elementClicked != 'DEL' && elementClicked != '=' ){
        
            if(operators.includes(elementClicked) && operators.includes(inputField.value[inputField.value.length - 1])){
                inputField.value = inputField.value.substring(0, inputField.value.length - 1) + elementClicked;
            }
            else{
                inputField.value = inputField.value + elementClicked; 
            }
            updateField();
        }
        else if(elementClicked === 'DEL') {
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

}



