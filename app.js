
let btns=document.querySelectorAll("button");
let inp=document.querySelector("input");

let string="";

Array.from(btns).forEach((button)=>{
    button.addEventListener("click",(event)=>{
        
        if(event.target.innerText==="="){
            string=eval(string);
            inp.value=string;
        }
        else if(event.target.innerText==="AC"){
            string="";
            inp.value=string;
        }
        else if(event.target.innerText==="DEL"){
            string=string.slice(0,string.length-1);
            inp.value=string;
        }
        else{
        console.log(event.target);
        string+=event.target.innerText;
        inp.value=string;
        }
    });
});