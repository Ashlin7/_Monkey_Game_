
var monkey , monkey_running
var banana ,bananaImage,bananaGroup, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score , ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(70,305,10,10);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.15;
  
  ground = createSprite(200,365,1000,20);
  ground.velocityX=-3;
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
}

function draw() {
  
  background("white");

  if(keyDown("space")&&monkey.y>=260)
  {
    monkey.velocityY=-15;
  }
  
  monkey.velocityY = monkey.velocityY + 0.6
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  monkey.collide(ground);
  
  food();
  obstacles();
  
  var survivalTime = 0;
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.round(frameCount/frameRate());
  text("Survival Time : "+ survivalTime ,140,40);
  
  drawSprites();
}

function food()
{
  if(frameCount%80 === 0)
    {
    banana = createSprite(400,10,10,10);
    banana.y = Math.round(random(120,200))
    banana.addImage(bananaImage);
    banana.velocityX=-6;
    banana.lifetime=100;
    banana.scale=0.1
    bananaGroup.add(banana);
    }
}

function obstacles()
{
  if(frameCount%300 === 0)
    {
    obstacle = createSprite(400,313,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -5 ;
    obstacle.scale = 0.2 ;
    obstacle.lifetime =100;
    obstacleGroup.add(obstacle)
    }
}





