const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World
var engine, world, box;


function setup() {
  var canvas=createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  box=bodies.rectangle(200, 100, 50, 50);
  World.add(world, box);
}

function draw() {
  background("black"); 
  rectMode(CENTER);
  rect(200, 200, 50, 50); 
  rect.shapeColor="white";
}