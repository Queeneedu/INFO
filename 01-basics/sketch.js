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
let world;
let groundA,groundB,groundC;
let blocks = [];

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
  typing.style('font-size','60px');

  //Sendbutton
  button = createButton('Send');
  button.style('font-size','60px');
  button.position(width/2, height/2 + 200);
  button.size(200,100);
  button.mousePressed(upload);

  //slider
  slider = createSlider(1,200,100); //(min,max,start from 0)
  slider.position(width/2-100, height/2+30);
  slider.style('width','400px');
  slider.style('height','50px');

  //Let's make the World
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  //ground and wall
  var options = {
    isStatic: true
  };
  groundA = Bodies.rectangle(width/2, height, width, 10, options);
  groundB = Bodies.rectangle(0, height/2, 10, height, options);
  groundC = Bodies.rectangle(width, height/2, 10, height, options);

  World.add(world, groundA);
  World.add(world, groundB);
  World.add(world, groundC);
}

//button and upload
function upload(){
  info = typing.value();
  infoSize = map(slider.value(),1,100,100,500);
  blocks.push(new Block(width/2,0,infoSize,infoSize/2));
  state = 2;
}

// function MakeBox(){
//   boxA = Bodies.rectangle(500,0, 100, 200);

//   World.add(engine.world, [boxA, ground]); //박스는 나중에 추가하기
//   Engine.run(engine);
// }

function draw(){
  //informant
  if (state == 1){
  }


  else if (state == 2){
    //upload text and fall
    background(255,200,0);
    Engine.update(engine);
    for (var i = 0; i < blocks.length; i++) {
    blocks[i].show();
    }

    //show ground
    noStroke(255);
    fill(255);
    rectMode(CENTER);
    rect(groundA.position.x, groundA.position.y, width, 20);
    rect(groundB.position.x, groundB.position.y, 10, height);
    rect(groundC.position.x, groundC.position.y, 10, height);
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
