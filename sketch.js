const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world
var object

function setup() {

  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var options={
    isStatic:true

  }
object=Bodies.rectangle(400,380,800,20,options)  
World.add(world,object);
}
function draw() {
  background(255,255,255);  
 Engine.update(engine);
 rectMode(CENTER)
rect(object.position.x,object.position.y,800,20)
}








































