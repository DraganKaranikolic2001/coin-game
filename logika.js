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

function flip(){
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

//Animacije
const canvas= document.getElementById("canvas1");
const ctx=canvas.getContext('2d');

const SpriteImage= new Image();

SpriteImage.src="images/0.png";

canvas.width=100;
canvas.height=100;

const CANVAS_WIDTH=canvas.width;
const CANVAS_HEIGHT=canvas.height;

let animationRunning=false;
let animationID=null;
const SpriteWidth=SpriteImage.width;
const SpriteHeight=SpriteImage.height/15;
let frameRate=0;
let gameFrame=0;
let number = 0;
let diff=null;
let x = 0;
let frameTimer = 0; // piksela u sekundi
const frameInterval= 1000/20;

function animate(timmy){
    if(timmy){
       diff = timmy-number;
        // console.log("frame",diff);
        number=timmy;
    }
    if(!animationRunning)return false;
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.fillRect(0,0,1,1);
    //ctx.drawImage(SpriteImage,sx,sy,sw,sh,dx,dy,dw,dh);
    // console.log(SpriteWidth);
    // console.log(SpriteHeight);
    // console.log("canvas"+CANVAS_WIDTH);
    // console.log("canvas heighy"+CANVAS_HEIGHT);
  
    frameTimer += diff;
    if (frameTimer >= frameInterval) {
        frameRate = (frameRate + 1) % 15; 
        // console.log(frameTimer);
        frameTimer = 0;
        
    }
  
    ctx.drawImage(SpriteImage,0,frameRate*SpriteHeight,SpriteWidth,SpriteHeight,0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    animationID=requestAnimationFrame(animate);
}
 
function startCanvasAnimation(duration,res) {
    animationRunning = true;
    animate(); 

    setTimeout(() => {
        animationRunning = false;
        cancelAnimationFrame(animationID);
        drawLogo(res);
    }, duration); 

}

//  drawStaticLogoHeads();

function drawStaticLogoHeads() {
    const logoImg = new Image();
    logoImg.src = "images/heads.png";
    logoImg.onload = () => {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx.fillRect(0,0,1,1);
        ctx.drawImage(logoImg, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        
    };
}


function drawStaticLogoHTails(){
    const logoImg = new Image();
    logoImg.src = "images/tails.png";
    logoImg.onload = () => {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx.fillRect(0,0,1,1);
        ctx.drawImage(logoImg, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        
    };
}



