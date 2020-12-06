// Benedikt Groß
// Example is based on examples from: http://brm.io/matter-js/, https://github.com/shiffman/p5-matter
let informant;
let importance;
let myFont;


var Engine = Matter.Engine;
var Render = Matter.Render;
var World = Matter.World;
var Bodies = Matter.Bodies;

var engine;

var boxA;
var boxB;
var ground;

function preload() {
    myFont = loadFont('asset/BMOTF.otf');
}

function setup() {

  createCanvas(1920, 1080);
  background(255);

  //informant
  informant = new Informant();
    informant.Typing();
    informant.SendButton();
    informant.Slider();
    informant.Update();
}
  // create an engine
//   engine = Engine.create();
//
//   // create two boxes and a ground
//   boxA = Bodies.rectangle(200, 200, 80, 80);
//   boxB = Bodies.circle(270, 50, 10);
//   ground = Bodies.rectangle(0, height, width, 20,
//      {isStatic: true}
//    );
//
//   // add all of the bodies to the world
//   World.add(engine.world, [boxA, boxB, ground]);
//
//   // run the engine
//   Engine.run(engine);
// }
//
// function draw() {
  // background(0);
  //
  // fill(255);
  // drawVertices(boxA.vertices);
  // drawVertices(boxB.vertices);
  //
  // fill(128);
  // drawVertices(ground.vertices);


// }
//
// function drawVertices(vertices) {
//   beginShape();
//   for (var i = 0; i < vertices.length; i++) {
//     vertex(vertices[i].x, vertices[i].y);
//   }
//   endShape(CLOSE);
