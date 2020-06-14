// soldier's spellinf is wrong😊

var helicopterIMG, helicopterSprite, packageSprite,packageIMG,bomb;
var soilder , bar, smoke, smoke_nade,anime,idle,bg,boom;
var cameraX,cameraY;

var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png");
	anime = loadAnimation("2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png");
idle = loadImage("bmb.png");
bg = loadImage("bg.jpg")
smoke_nade = loadImage("smke.png");
boom = loadImage("bang.png")
}

function setup() {
	createCanvas(window.innerWidth, 600);
	rectMode(CENTER);
	
	let bog = createSprite(width/1.2,height/5);
	bog.addImage(bg);
	bog.scale = 12;

	packageSprite=createSprite(width*1.5, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.visible = false;

	helicopterSprite=createSprite(width*1.5, -300, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width*4,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width*1.5 ,200, 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	
soilder = createSprite(width/5,505,50,50);
soilder.addAnimation("first",anime);
soilder.scale = 0.3;

bar  = createSprite(width*1.2,550,50,height);
bar.visible = false;

bomb = createSprite(width*1.6,510,40,80);
bomb.addImage(idle);
smoke = createSprite(bomb.x+6,bomb.y);
bomb.scale=0.2;
bomb.depth = 10;
smoke.addImage(smoke_nade);
smoke.scale = 0.1;
smoke.depth = bomb.depth-1;
	//Create a Ground
	ground = Bodies.rectangle(width/2, 550, width*4, 10 , {isStatic:true} );

 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
	background(0);;
	cameraX = camera.x;
	cameraY = camera.y;
camera.x = soilder.x;
soilder.velocityX = 10;

if(soilder.x-bar.x>soilder.width+bar.width/2){
// callback();
	soilder.velocityX = 0;
	bomb.visible = true;
	smoke.visible = true;
}

if(helicopterSprite.y<150){
helicopterSprite.y = helicopterSprite.y+1.9;
}

if(helicopterSprite.y>-190){
camera.y = soilder.y-210;
}
  packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
	
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody,false);
		packageSprite.visible = true;
		smoke.velocityY = -18;
		var bomb1 = createSprite(bomb.x+5,510,40,80);
		bomb1.addImage(boom)
		bomb1.scale = 0.25;
		bomb1.depth = 20;
		bomb.lifetime = 4;
		bomb1.lifetime =7;
  }
}
//IT IS NOT PERFECT IN MANY WAYS

