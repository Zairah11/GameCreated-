var PLAY = 1;
var END = 0;
var gameState = PLAY;

var rabbit
var Vampire

var rabbit, rabbit_running, rabbit_collided;
var Vampire, Vampire_running, Vampire_collided;
var ground, invisibleGround, groundImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var score;

var gameOverImg,restartImg

function preload(){
    rabbit_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  rabbit_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");

  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");

   restartImg = loadImage("restart.png")
  gameOverImg = loadImage("gameOver.png")

}

function setup() {
    createCanvas(600, 200);

    rabbit = createSprite(50,180,20,50);
  rabbit.addAnimation("running", rabbit_running);
  rabbit.addAnimation("collided" ,rabbit_collided);
  rabbit.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  
   gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  
  gameOver.scale = 0.5;
  restart.scale = 0.5;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;

  obstaclesGroup = createGroup();

  rabbit.setCollider("rectangle",0,0,400,rabbit.height);
  rabbit.debug = true
  
  score = 0;
  
 
}

function draw() {
    background(180);
    
    text("Score: "+ score, 500,50);
    
    console.log("this is ",gameState)
    
    
    if(gameState === PLAY){
      gameOver.visible = false
      restart.visible = false
      ground.velocityX = -(4+3*score/100);
      score = score + Math.round(frameCount/60);
    
    if(score>0&&score%100==0){
      checkPointSound.play();
    }} 
}
