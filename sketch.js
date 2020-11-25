
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//var line1,line2,line3;



function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,400);
	dustbin = new Dustbin(680,730);
	ground = new Ground(400,790);

	//line1=createSprite(620,730,20,80);
	//line1.body = Bodies.rectangle(620,730,20,80,isStatic=true,density=1.2);
	//World.add(world, line1.body);

	//line2=createSprite(740,730,20,80);
	//line2.body = Bodies.rectangle(740,730,20,80);
	//World.add(world, line2.body);

	//line3=createSprite(680,770,)


	

	




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //console.log(paper.body.y);
  
  paper.display();
  dustbin.display();
  ground.display();

  //keyPressed();

  
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:14,y:-14});
	}
}



