//Dom interface
let typing, button, slider;

//변수 선언
let info, infoSize;
let restFont, basicFont;
let state;

//matter.js Class
let Engine = Matter.Engine;
let Render = Matter.Render;
let World = Matter.World;
let Bodies = Matter.Bodies;
let engine;
let boxA, ground;


//font load
function preload() {
  basicFont = loadFont('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/HeirofLightBold.woff');
  restFont = loadFont('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_eight@1.0/DOSGothic.woff');
}


function setup(){
  //informant
  state = 1;
  createCanvas(1920, 1080);
  background(255,200,0);

  //typing
  typing = createInput('Enter Information');
  typing.position(width/2-typing.width, height/2-200);
  typing.size(500,100);
  //  typing.style('font','basicFont');
  typing.style('font-size','60px');

  //Sendbutton
  button = createButton('Send');
  //  button.style('font','basicFont');
  button.style('font-size','60px');
  button.position(width/2, height/2 + 200);
  button.size(200,100);
  button.mousePressed(upload);

  //slider
  slider = createSlider(1,100,1); //(min,max,start from 0)
  slider.position(width/2,height/2);
  slider.style('width','200px');
  slider.style('height','100px');

  //Let's make the World
  engine = Engine.create();
  boxA = Bodies.rectangle(500,0, 100, 200);
  ground = Bodies.rectangle(0, height, width, 20,
       {isStatic: true}
     );
  World.add(engine.world, [boxA, ground]); //박스는 나중에 추가하기
  Engine.run(engine);
}

//button and upload
function upload(){
  info = typing.value();
  infoSize = slider.value();
  state = 3;
}


function draw(){

  //informant
  if (state == 1){
  }

  //upload text and fall
  else if (state == 2){
    fill(255);
    drawVertices(boxA.vertices);
    fill(128);
    drawVertices(ground.vertices);
  }

  //INEEDREST
  else if (state == 3){
    textFont(restFont);
    textSize(350);
    fill(200,0,0);
    textAlign(CENTER,CENTER);
    text('INEEDAREST',width/2, height/2);
  }
}

function drawVertices(vertices) {
  beginShape();
  for (var i = 0; i < vertices.length; i++) {
    vertex(vertices[i].x, vertices[i].y);
  }
  endShape(CLOSE);
}
