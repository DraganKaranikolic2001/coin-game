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

console.log("animatons.js");
