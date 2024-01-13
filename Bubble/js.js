
let Timer = 60;
let score = 0;
let ranhit;
let ran;
const start = document.getElementById('start')
function displayBubble(){
    var bubblee = '';
    for (let i = 1; i <= 171; i++) {
         ran = Math.floor(Math.random() * 10)
        bubblee += `<div class="bubble">${ran}</div>`;
        
    }
    const bubbles = document.querySelector('.empty')
    bubbles.innerHTML = bubblee;
    return;
    
}

function timer(){
    const timeInt = setInterval(function(){
        if(Timer>0){
            Timer--
            document.querySelector('#Timer').innerText = Timer
        }else{
            clearInterval(timeInt)
            document.querySelector('.empty').innerHTML = `<h1 id = "game" >Game Over</h1>`;
            document.querySelector('#Hit').innerHTML = '0'
        }
    },1000)
}


function scoreInc(){
    score+=10;
    document.querySelector('#Score').innerText = score
}

function ranHit(){
     ranhit = Math.floor(Math.random()*10)
    document.querySelector('#Hit').innerText = ranhit;
}



const back = document.querySelector('.empty')
back.addEventListener('click',function(e){
    const num = Number(e.target.textContent)
    if(ranhit === num){
        scoreInc()
        displayBubble()
    }
    ranHit()
})

start.addEventListener('click',function(){
    timer()
    ranHit()
})


displayBubble()

