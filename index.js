let screen=document . getElementById("value");
let allButtons=document.querySelectorAll("button");
let string="";
let isError=false;
let operator=["/","*","-","%","+"];
allButtons.forEach(e=>{e.addEventListener("click",function(event){
    let pressedButton= event.target.innerText;
    let lastChar=string[string.length-1];
    if (isError && pressedButton!=="AC") {
        string="";
        screen.value="";
        isError=false;
        
    }
    if (operator.includes(pressedButton)) {
        if (string==="" || operator.includes(lastChar)) {
            return;
        }
        else{
            string=string+pressedButton;
            screen.value=string;
            return;
        }
        
    } 
    if (pressedButton== "AC") {
        string="";
        screen.value="";
        

    }
    else if(pressedButton=="="){
        if (string=="") {
            screen.value="error";
            isError=true;
            return;
        }
        else{

            string=resultCooked(string);
            screen.value=string;
        }
            

    }
    else if(pressedButton=="del"){
        string=string.slice(0,string.length-1)
        screen.value=string;

    }
    else if(pressedButton=="."){
        if (string=="") {
            string=`0${pressedButton}`;
            screen.value=string;
        }
        else{

            let parts= string.split(/[\+\-\*\/]/);
            currentNumber=parts[parts.length-1];
            if (!currentNumber.includes(".")) {
                string=string+pressedButton;
                screen.value=string;
            }
        }
    }
    else{
        string=string+pressedButton;
        screen.value=string;
        

    }
})})
document.addEventListener("keydown",function(event){
let pressedKey=event.key;
let lastChar=string[string.length-1];
let number=["0","1","2","3","4","5","6","7","8","9"];
event.preventDefault();
if (pressedKey==="Enter") {
    if (string=="") {
        screen.value="error";
        isError=true;
        return;
    }
    else{

        string=resultCooked(string);
        screen.value=string;
        return
    }
} 
else if(number.includes(pressedKey)){
    string=string+pressedKey;
    screen.value=string;
    return
}
else if(operator.includes(pressedKey)) {
    if (string==="" || operator.includes(lastChar)) {
        return;
    }
    else{
        string=string+pressedKey;
        screen.value=string;
        return;
    }
    
}
else if(pressedKey==="Backspace") {
    string=string.slice(0,string.length-1)
    screen.value=string;
}
else if(pressedKey==="."){
    if (string=="") {
        string=`0${pressedKey}`;
        screen.value=string;
    }
    else{

        let parts= string.split(/[\+\-\*\/]/);
        currentNumber=parts[parts.length-1];
        if (!currentNumber.includes(".")) {
            string=string+pressedKey;
            screen.value=string;
        }
    }
}
else{
    if (pressedKey==="c") {
        
        string="";
            screen.value="";
    }
}
})
function resultCooked(input) {
    return new Function(`return ${input}`)();
}