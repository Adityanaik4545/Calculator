let screen=document . getElementById("value");
let allButtons=document.querySelectorAll("button");
let string="";
allButtons.forEach(e=>{e.addEventListener("click",function(event){
    let pressedButton= event.target.innerText;
    if (pressedButton== "ac") {
        string="";
    }
    else{
        string=string+pressedButton;
        
    }
    if(pressedButton=="="){
        eval(string)
    }
})})