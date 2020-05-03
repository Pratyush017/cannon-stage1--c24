const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var cannon,ball;
var engine, world;

function setup() 
{
  createCanvas(900, 550);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(450, 530, 900, 50);
  cannon = new Cannon(90,430,60,20);
  ball = new Ball(600,250,20);


}

function draw() 
{
  background("green");
  Engine.update(engine);
  cannon.display();
  ball.display();
  ground.display();
}
