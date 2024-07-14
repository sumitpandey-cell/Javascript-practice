let num = document.querySelectorAll("#num")
let symbol = document.querySelectorAll('#symbol')
let curr = document.querySelector(".curr")
let del = document.querySelector('#delete');
let AC = document.querySelector("#remove")
let equ = document.querySelector("#equal")
let prev = document.querySelector('.prev');

let show = '';
function showNum(){
    num.forEach((ele,idx)=>{
        ele.addEventListener('click',(e)=>{
            show+=e.target.textContent
            curr.innerText = show;
        })
    })
    
    symbol.forEach(element => {
        element.addEventListener('click',(e)=>{
    
            console.log(show.length);
            if(show[show.length-1]=='-' || show[show.length-1]=='+'||show[show.length-1]=='*'||show[show.length-1]=='/'||show[show.length-1]=='%'){
                let newChar = e.target.textContent;
                let modifiedString = show.slice(0, -1) + newChar;
                show = modifiedString
                curr.innerText = show;
            }
            else{
                show+=e.target.textContent;
                curr.innerText = show;
            }
            
        })  
    });
}

function delet(){
    del.addEventListener('click',(e)=>{
            let newStr = show.slice(0, -1);
            show = newStr;
            curr.innerText = show;
            prev.innerText = '';
        
        
    })
}

function remove(){
    AC.addEventListener('click',(e)=>{
        show = "";
        curr.innerText = show;
        prev.innerText = show;
    })
}

function equal(){
    equ.addEventListener('click',(e)=>{
        prev.innerText = show
        let n = eval(show);
        show = n.toString();
        curr.innerText = show
    })
}

showNum();
delet();
remove();
equal();
