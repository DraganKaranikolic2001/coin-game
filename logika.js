let headCounter=0;
let tailsCounter=0;
const paraHead= document.getElementById("para-head");
const paraTail= document.getElementById("para-tail");

const flipButton= document.getElementById("flip-button");
flipButton.addEventListener("click",flip);

const resetButton= document.getElementById("reset-button");
resetButton.addEventListener("click",reset);

window.addEventListener("DOMContentLoaded",function(){
    updateNumbers();
    const firstCoin = generateCoin();
    drawLogo(firstCoin.coin);
})

function updateNumbers()
{
    paraHead.textContent="Head: "+ headCounter;
    paraTail.textContent="Tail: "+ tailsCounter;
}


function generateCoin(){
    const coins =[
        {src:'images/heads.png', coin:'head'},
        {src: 'images/tails.png', coin:'tail'}
    ];
    const randomIndex=Math.floor(Math.random()*coins.length);
    return coins[randomIndex];
}

let animationTmp=false;

function flip(){
    const goal = parseInt(document.getElementById("game-goal").value);
    if(animationTmp) return;
    animationTmp=true;
    const resultCoin=generateCoin();
    const result=resultCoin.coin; 
    console.log("Ovo je rezultat " + result);
    startCanvasAnimation(1000, result);

    setTimeout(()=>{
        if(result=="head"){
        headCounter++;
        console.log("heads se pao");
        }
        else if(result=="tail"){
        tailsCounter++;
        console.log("tails se pao");
        }
        updateNumbers();
    
        setTimeout(()=>{
            if (headCounter === goal) {   
            alert("Pobeda! Glava je pobedila.");
            reset();
         } else if (tailsCounter === goal) {
            alert("Pobeda! Pismo je pobedilo.");
            reset();
        }
        },110);
    animationTmp=false;
    },1000);

   
}

function reset(){
    headCounter=0;
    tailsCounter=0;
    updateNumbers();
    
}

function drawLogo(res){
        if(res=="tail"){
            drawStaticLogoHTails();
        }
        else{
            drawStaticLogoHeads();
        }
}

function resize(){

    let width=window.innerWidth;
    let height=window.innerHeight;
    const ratio=16/9;
    const container= document.querySelector(".container");
    if((width/height)<ratio){
        container.style.width=width+"px";
        container.style.height=(width/ratio)+"px";
    }
    else{
        container.style.height=height+"px";
        container.style.width=(height*ratio)+"px";
    }


    const elFlip=document.getElementById("flip-button");
    const elReset=document.getElementById("reset-button");
    const elNaslov = document.getElementById("coin-title");
    const elTail= document.getElementById("para-tail");
    const elHead=document.getElementById("para-head");

    const base= window.innerHeight;

    const fontSizeBody = Math.min(20, (base * 0.025));
    const fontSizeTitle = Math.min(35, Math.max(10,base * 0.06));

    elHead.style.fontSize=fontSizeBody+"px";
    elTail.style.fontSize=fontSizeBody+"px";
    elNaslov.style.fontSize=fontSizeTitle+"px";
    elFlip.style.fontSize=fontSizeBody+"px";
    elReset.style.fontSize=fontSizeBody+"px";
}

window.addEventListener("resize", resize);
window.addEventListener("load",resize);

document.addEventListener('keydown',function(event){
    if(event.code==="Space")
        flip();
    if(event.code==="Escape")
        reset();
});


