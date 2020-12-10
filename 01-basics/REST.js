var Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var blocks = [];
var block;
var groundA, groundB, groundC;

function setup() {
  createCanvas(500, 500);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  var options = {
    isStatic: true
  };
  groundA = Bodies.rectangle(250, height, width, 20, options);
  groundB = Bodies.rectangle(0, 250, 10, height, options);
  groundC = Bodies.rectangle(height, 250, 10, height, options);

  World.add(world, groundA);
  World.add(world, groundB);
  World.add(world, groundC);
}


function mouseDragged() {
  blocks.push(new Block(mouseX, mouseY, random(10, 40), random(10, 40)));
}

function draw() {
  background(51);
  Engine.update(engine);
  for (var i = 0; i < blocks.length; i++) {
    blocks[i].show();
  }
  noStroke(255);
  fill(170);
  rectMode(CENTER);
  rect(groundA.position.x, groundA.position.y, width, 20);
  rect(groundB.position.x, groundB.position.y, 10, height);
  rect(groundC.position.x, groundC.position.y, 10, height);
}
