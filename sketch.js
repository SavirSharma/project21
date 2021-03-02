var canvas;
var music;
var disc1,disc2,disc3,disc4;
var box;
var edges;

function preload(){
    music=loadSound("music.mp3");
}


function setup(){
    canvas=createCanvas(800,600);
    disc1=createSprite(100,580,180,20);
    disc1.shapeColor="blue";
    disc2=createSprite(300,580,180,20);
    disc2.shapeColor="orange";
    disc3=createSprite(500,580,180,20);
    disc3.shapeColor="red"
    disc4=createSprite(700,580,180,20);
    disc4.shapeColor="green";
    box=createSprite(Math.round(random(150,650)),50,20,20);
    box.velocityX=Math.round(random(-5,5));
    box.velocityY=Math.round(random(2,8));
}

function draw(){
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    box.bounceOff(edges);

    if(box.x>790||box.x<10) {
        box.velocityX=box.velocityX*-1;
    }

    if(disc1.y-box.y<=10&&box.x<190){
        music.play();
        box.velocityX=0;
        box.velocityY=0;
        box.shapeColor = disc1.shapeColor;
    }

    if(disc2.y-box.y<=10&&box.x<390&&box.x>210){
        box.bounceOff(disc2);
        box.shapeColor=disc2.shapeColor;
    }

    if(disc3.y-box.y<=10&&box.x>410&&box.x<590){
        box.bounceOff(disc3);
        box.shapeColor=disc3.shapeColor;
    }

    if(disc4.y-box.y<=10&&box.x>610&&box.x<790){
        box.bounceOff(disc4);
        box.shapeColor=disc4.shapeColor;
    }
    drawSprites();
}