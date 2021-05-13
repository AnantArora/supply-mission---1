var helicopterIMG, helicopterSprite, packageSprite,packageIMG,zombie,man;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("images/helicopter.png")
	packageIMG=loadImage("images/package.png")
	zombieIMG=loadImage("images/jombio.PNG")
    manIMG=loadImage("images/man.PNG")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	var zombie=createSprite(100,600,20,50)
	zombie.addAnimation("zombie",zombieIMG);
    zombie.scale=0.23

	var man=createSprite(500,600,20,50)
	man.addAnimation("man",manIMG);
    man.scale=0.3


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("#000000")


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#ffffff");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	console.log("down")
	Matter.Body.setStatic(packageBody, false);
	   
	
    
  }
}



