const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var arr1 = [];
var h = 0;
var rain,i;


function setup() {
  createCanvas(1500,700);
  engine = Engine.create();
  world = engine.world;
 
  
}
function gravity(){
  rain.velocityY+=0.1;
  if(rain.y>700){
    rain.y = 0;
  }
}
function draw() {
  background(255,255,255);  
  Engine.update(engine);

  arr1.push(rain = new raindrop(random(0,1500), 0,5,5));
  for(var i = 0;i<arr1.length;i++){
    arr1[i].display();
}
gravity();
  drawSprites();
  
}
