
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var boy;
var tree;
var stone;
var mango1,mango2,mango3;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground();
	boy = new Boy();
	tree =new Tree();
	stone = new Stone();
	slingShot = new Slingshot(stone.body,{x:95,y:595}); 
	mango1 = new Mango();
	mango2 = new Mango();
	mango3 = new Mango();
	mango4 = new Mango();
	mango5 = new Mango();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  boy.display();
  tree .display();
  stone.display();
  slingShot.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  
  
  
  
    detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);



  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX , y:mouseY});
}
function mouseReleased(){
    slingShot.fly()
}
function keyPressed(){
	if(keyCode === 32){
	  Matter.Body.setPosition(stone.body,{x:800, y:480});
	  sling.attach(stone.body);
	}
}
function detectCollision(lstone,lmango){
  stoneBodyPosition = lstone.body.position;
  mangoBodyPosition = lmango.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance <= lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body, false);
  }

}
