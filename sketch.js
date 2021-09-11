
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1280, 605);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObj=new Ground(width/2,600,width,20);
	leftSide=new Ground(1100,550,20,120);
	rightSide=new Ground(900,550,20,120);
    var ball_options ={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2	
	}
	ball=Bodies.circle(200,200,20,ball_options);
    World.add(world,ball);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  leftSide.display();
  rightSide.display();
  fill("blue");
  ellipse (ball.position.x,ball.position.y,40,40);
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:65,y:-85})
	}
}


