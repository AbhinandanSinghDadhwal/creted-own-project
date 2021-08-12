
var gameState = "start";
var bgimg;
var screen;

var city_bg,city_night

var invisibleground

function preload(){

  
  //trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  bgimg = loadImage("images/bgimage.png");

  how = loadImage("images/BG.webp")
  
  city_bg = loadImage("images/bg3.jpg");
  city_night = loadImage("images/bg3.jpg");

  thief_img = loadImage("images/thief.gif")

  // thief_img = loadAnimation("images/thief1.png", "images/thief2.png")

  police_img = loadImage("images/police-car-71.gif")
  

  //gameOverImg = loadImage("images/gameOver.png");
  //restartImg = loadImage("images/restart.png");
  jumpSound = loadSound("images/jump.mp3");

  coin_img = loadImage("images/coin.png")
  diamond_img = loadImage("images/diamons.png")
  obstacle1 = loadImage("images/car.png")
  obstacle2 = loadImage("images/bus.png")
 
}



function setup() {

  createCanvas(800, 600);
  screen= new Screen();
  
  city = createSprite(400, 300,800,600)
  city.addImage(city_bg)
  city.height = 600
  
  invisibleground = createSprite(400, 600, 800, 5)
  invisibleground.visible = false

  thief = createSprite(300,530,20,50)
  thief.addImage(thief_img)
  thief.scale = 0.7;

  police = createSprite(100,570,20,50)
  police.addImage(police_img)
  police.scale = 0.2
  
  console.log(thief.y)

   coinGroup= new Group()
  obstaclesGroup = new Group()

}


function draw() {
  
  if (gameState === "start"){
      background(bgimg)
      screen.startScreen()
      
  }
  if (gameState === "story"){
    background(02);
    screen.storyScreen()
  }

  if(gameState==="rules"){
    background(how);
    screen.ruleScreen()
  }

  if(gameState==="game"){
    background(0);
    screen.play.hide()
    screen.howText.hide()
    screen.rule1.hide()
    screen.rule2.hide()
    screen.rule3.hide()
    screen.rule4.hide()
    screen.rule5.hide()
    screen.rule6.hide()
    
    game()

    drawSprites()
  }
  
}

function game(){

  city.velocityX = -6

  if(city.x < 0){
      city.x = city.width/2
  }

  if(keyDown("space")&& thief.y>=400 ) {
    thief.velocityY = -12;
    jumpSound.play();
  }


  thief.velocityY = thief.velocityY + 0.8
  thief.collide(invisibleground);
  spawnCoins()
  //spawnObstacles()

}

function spawnCoins() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var coin = createSprite(800,120,40,10);
    coin.y = Math.round(random(200,500));
    coin.addImage(coin_img);
    coin.scale = 0.5;
    coin.velocityX = -3;
    
     //assign lifetime to the variable
    coin.lifetime = 200;
    
      
    //add each cloud to the group
    coinGroup.add(coin);
  }
  
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -(6 + 3*score/100);
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}





