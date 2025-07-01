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
})

function updateNumbers()
{
    paraHead.textContent="Heads: "+ headCounter;
    paraTail.textContent="Tails: "+ tailsCounter;
}


function generateCoin(){
    const coins =[
        {src:'images/heads.png', coin:'head'},
        {src: 'images/tails.png', coin:'tail'}
    ];
    const randomIndex=Math.floor(Math.random()*coins.length);
    return coins[randomIndex];
}

function flip(){
    const resultCoin=generateCoin();
    const result=resultCoin.coin;
    console.log("Ovo je rezultat " + result);
    if(result=="head"){
        drawStaticLogoHeads();
        headCounter++;
        console.log("heads se pao");
    }
    else if(result=="tail"){
        drawStaticLogoHTails();
        tailsCounter++;
        console.log("tails se pao");
    }
    updateNumbers();
}

function reset(){
    headCounter=0;
    tailsCounter=0;
    updateNumbers();
}




const canvas= document.getElementById("canvas1");
const ctx=canvas.getContext('2d');

const SpriteImage= new Image();

SpriteImage.src="images/0.png";

canvas.width=100;
canvas.height=100;

const CANVAS_WIDTH=canvas.width;
const CANVAS_HEIGHT=canvas.height;

// let animationRunning=false;
// let animationID=null;
// const SpriteWidth=SpriteImage.width;
// const SpriteHeight=SpriteImage.height/30;
// let frameRate=0;
// let gameFrame=0;
// let number = 0;
// const staggerFrame=3;
// let diff=null;
// let x = 0;
// let frameTimer = 0; // piksela u sekundi
// const frameInterval= 1000/30;

//  drawStaticLogoHeads();

function drawStaticLogoHeads() {
    const logoImg = new Image();
    logoImg.src = "images/heads.png";
    logoImg.onload = () => {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx.drawImage(logoImg, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        
    };
}


function drawStaticLogoHTails(){
    const logoImg = new Image();
    logoImg.src = "images/tails.png";
    logoImg.onload = () => {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx.drawImage(logoImg, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        
    };
}



