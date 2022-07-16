var runningGirl;
var Girl;
var road, roadImg;
var gameOver;
var score;
var sky;
var obImage;
var score = 0;
var obstacleGroup;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
    runningGirl = loadAnimation("runningGirl.gif");
    roadImg = loadImage("road.png");
    sky = loadImage("sky.png");
    obImage = loadImage("obstacle.png");
    gameover = loadImage("gameOver.png");
    
}

function setup() {
 createCanvas(600, 600);

 Girl = createSprite(200,490,40,40);
 Girl.addAnimation("runningGirl", runningGirl);
 Girl.scale = 0.3

 road = createSprite(100, 600, 600, 10);
 road.addImage("roadImg", roadImg);
 road.x = road.width /2;
road.velocityX = -4;

invisibleGround = createSprite(200,600,400,10);
invisibleGround.visible = false;

gameOver = createSprite(300,300,50,50);
gameOver.addImage(gameover);
gameOver.visible = false;

obstacleGroup = new Group();
 
}

function draw() {
    background(sky)
    obstacle();
    text("Score: "+ score, 500,50);
    score = score+10

if (gameState === PLAY){
  if(keyDown("space")) {
    Girl.velocityY = -20;
  }
  
  Girl.velocityY = Girl.velocityY + 0.8
  
  if (road.x < 100){
    road.x = road.width/3;
  }
  if(obstacleGroup.isTouching(Girl)){
       gameState = END;
  }

}
else if (gameState === END){
  
  gameOver.visible = true;
        score = 0;
        Girl.velocityX = 0;
        obstacleGroup.velocityX = 0;
        road.velocityX = 0;
}
    
      
  
      
    Girl.collide(invisibleGround);
    drawSprites();
  }
 
    function obstacle(){
      if (frameCount % 95 == 0){
        var obstacle = createSprite(580,500,50,60);
   obstacle.velocityX = -3;
   obstacle.addImage(obImage);
   obstacle.scale = 0.2
   var rand = Math.round(random(400, 500));
   obstacle.y = rand;
   obstacleGroup.add(obstacle);
      }
    }
