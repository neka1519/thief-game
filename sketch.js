
var laser,laser2,laser3;
var thief, thiefImg;
var ruby, rubyImg;
var resetbutton, gameOver, resetbuttonImg, gameOverImg;
var gameState = "serve";

function preload(){
  thiefImg = loadImage("sam/thief.png");
  rubyImg = loadImage("sam/ruby.png");
  gameOverImg = loadImage("sam/gameover.png");
  resetbuttonImg = loadImage("sam/reset.png");
}

function setup(){
laser = createSprite(203,331,10,150);
laser.velocityY = -4;
laser.shapeColor = "red";

laser2 = createSprite (140,280,150,10);
laser2.velocityX = 4;
laser2.shapeColor = "red";

laser3 = createSprite (200,200,100,10);
laser3.velocityX = -4;
laser3.shapeColor = "red";

thief = createSprite (70,370,100,100);
thief.addImage(thiefImg);
thief.scale = 0.4;

 ruby = createSprite(350,80,50,50);
ruby.addImage(rubyImg);
ruby.scale = 0.1;
ruby.rotationSpeed=ruby.rotationSpeed+ 5;

 resetbutton = createSprite (33,32);
 gameOver = createSprite(200,200);
gameOver.visible = false;
resetbutton.visible = false;



}

function draw() {
background("white");

if(gameState == "serve"){
serve();
textSize(20);
textAlign(CENTER, TOP);
text("TRY TO STEAL THE DIAMOND ", 200,117);
text("WITHOUT GETTING HIT BY THE LASER !!!", 200,160);
text("PRESS SPACE TO PLAY !!!", 200,250);
}

if (keyDown("space") && gameState == "serve") {
gameState = "play";
}

if(gameState === "play"){
  background("green");
  console.log("play");
  laser.visible = true;
  laser2.visible = true;
  laser3.visible = true;
  thief.visible = true;
  ruby.visible = true;
    
//gameOver.visible = false;
//resetbutton.visible = false;
 
 
 if (keyDown("up")){
   thief.velocityY = -5;
   thief.velocityX = 0;
   
 }
 if(keyDown("down")){
   thief.velocityY = 5 ;
      thief.velocityX = 0 ;
 }
 
 if (keyDown("left")){
   thief.velocityX = -5;
   thief.velocityY = 0;
 }
 
 if(keyDown("right")){
   thief.velocityX = 5;
    thief.velocityY = 0;
 }

                     
 createEdgeSprites();
 laser.bounceOff(edges);
 laser2.bounceOff(edges);
 laser3.bounceOff(edges);
 thief.bounceOff(edges);
}

 if(thief.isTouching(ruby)){
   textSize(35);
   stroke(random((0,255), random(0,255),random(0,255)));
   text("Good Job!!",70,103);
    text("You won!!!",70,203);
    ruby.setVelocity(0,0);
    thief.setVelocity(0,0);
    laser.setVelocity(0,0);
    laser2.setVelocity(0,0);
    ruby.destroy();
    laser3.destroy();
    laser.destroy();
    laser2.destroy();
    laser3.destroy();
    thief.destroy();
 }
 
 if(thief.isTouching(laser)||(laser2)||(laser3)){
     gameState = "over";
    }

 if(gameState === "over"){
   // background("black");
  
gameOver.addImage(gameover);
gameOver.scale = 1.5;

resetbutton.setAnimation(resetbuttonImg);
resetbutton.scale = 0.1;
      gameOver.visible = true  ;
      resetbutton.visible = true;
        ruby.destroy();
    laser.destroy();
    laser2.destroy();
    laser3.destroy();
    thief.destroy() ;
 }

 if(keyDown("r")){
     reset();
     console.log("working");
    }
drawSprites();
}

function reset(){
gameOver.visible = true;
resetbutton.visible = true;
gameState = "serve";
}

function serve() {
background("white");
console.log("serve");

 laser.visible = true;
  laser2.visible = true;
  laser3.visible = true;
  thief.visible = true;
  ruby.visible = true;
}



