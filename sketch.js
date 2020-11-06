var player, player_running, player_collided

var ground, invisGround

var bg, backgroundImage

var enemy, enemyGroup

var gameState = "play"

function preload(){
player_running = loadAnimation("player1.png", "player2.png")
player_collided = loadImage("deadChar.png")
backgroundImage = loadImage("background.jpg")
enemyAnimation = loadAnimation("enemy1.png", "enemy2.png", "enemy3.png", "enemy4.png", "enemy5.png", "enemy6.png")


}

function setup() {
createCanvas(400, 400);

backgroundImage = createSprite(0, 0, 400, 400);
bg.addImage(backgroundImage);
bg.scale = 1.
  
player = createSprite(100, 320, 200, 200);
player.addAnimation("running", player_running);
player.scale = 0.1;
  
invisGround = createSprite(400, 350, 800, 10);
invisGround.velocityX = -4;
invisGround.x = ground.width/2;
invisGround.visible = false

enemyGroup = createGroup();
bg.velocityX = -4;
}

function draw() {
background(0)

 drawSprites();
}