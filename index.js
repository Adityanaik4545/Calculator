let screen=document . getElementById("value");
let allButtons=document.querySelectorAll("button");
let string="";
allButtons.forEach(e=>{e.addEventListener("click",function(event){
    let pressedButton= event.target.innerText;
    if (pressedButton== "ac") {
        string="";
        screen.value="";
        

    }
    else if(pressedButton=="="){
        string=resultCooked(string);
        screen.value=string;

    }
    else if(pressedButton=="del"){
        string=string.slice(0,string.length-1)
        screen.value=string;

    }
    else{
        string=string+pressedButton;
        screen.value=string;
        

    }
})})
function resultCooked(input) {
    return new Function(`return ${input}`)();
}