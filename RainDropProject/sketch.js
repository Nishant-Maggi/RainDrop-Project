const Engine = Matter.Engine ; 
const World = Matter.World ;
const Bodies = Matter.Bodies;
 
var engine, world;

var rainDrops = [];

function setup() {

  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

}

function draw() {

  background(0,0,0);  

  Engine.update(engine);

  if(frameCount % 2 === 0 ){
    var rainDrop = new RainDrop(random(10,790),0,random(6,20),random(6,20));

    rainDrops.push(rainDrop);

  }

  for(var index in rainDrops){
    rainDrops[index].display();
  }
}