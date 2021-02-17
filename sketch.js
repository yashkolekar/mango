
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");

  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	groundObject=new ground(0,0,20,20);
	mango1=new mango(1000,140,30);

	mango2=new mango(1000,100,30);

	mango3=new mango(900,180,30);
	mango4=new mango(1100,130,30);
	mango5=new mango(1100,180,30);
	mango6=new mango(1200,150,30);

	treeObj=new tree(1050,580);
    stone1=new stone(200,200,20,20)

	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
 

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
   mango4.display();
   mango5.display();
   mango6.display();
stone1.display()
  groundObject.display();
}
