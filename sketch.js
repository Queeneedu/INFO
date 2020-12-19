//시리얼
let serial;
let num;
//Dom interface
let typing, button, slider;
let bbox;

//변수 선언
let info, infoSize;
let restFont, basicFont;
let state;
let blocks=[];
let life;
let time;

//matter.js Class
let Engine = Matter.Engine;
let Render = Matter.Render;
let World = Matter.World;
let Bodies = Matter.Bodies;
let engine;
let groundA,groundB, groundC;


//font load
function preload() {
  basicFont = loadFont('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/HeirofLightBold.woff');
  restFont = loadFont('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_eight@1.0/DOSGothic.woff');
}


function setup(){
  //타이머
  time = millis();

  //시리얼
  serial = new p5.SerialPort();
  serial.open('COM7');

  //informant
  state = 1;
  createCanvas(1920, 1080);
  background('#b7c0d7');

  //typing
  typing = createInput('당신의 정보를 입력하세요.슬라이더로 중요도를 조절하세요.');
  typing.position(width/2-500, height/2-200);
  typing.size(1000,100);
  //  typing.style('font','basicFont');
  typing.style('font-size','35px');

  //Sendbutton
  button = createButton('Send');
  //  button.style('font','basicFont');
  button.style('font-size','60px');
  button.position(width/2-100, height/2 + 200);
  button.size(200,100);
  button.mouseClicked(upload);

  //slider
  slider = createSlider(1,100,1); //(min,max,start from 0)
  slider.position(width/2-100,height/2);
  slider.style('width','200px');
  slider.style('height','100px');

  //Let's make the World
  engine = Engine.create();
  world = engine.world;
  let options = {
     isStatic: true
   };

  groundA = Bodies.rectangle(width/2, height, width, 20, options);
  groundB = Bodies.rectangle(0, height/2, 20, height, options);
  groundC = Bodies.rectangle(width,height/2,20,height,options);
  World.add(world, groundA);
  World.add(world, groundB);
  World.add(world, groundC);
  Engine.run(engine);
}

//upload and make bbox
function upload(){
  serial.write(1);
  console.log(1);
  // setTimeout(function(){
  info = typing.value();
  infoSize = map(slider.value(),1,50,10,100);
  bbox = basicFont.textBounds(info, random(600,1300), 0, infoSize);
  blocks.push(new Block(bbox.x, bbox.y, bbox.w, bbox.h, info,infoSize));
  state=2;
// },1500);
  num = 1;
}

function draw(){
  //show ground
  noStroke(255);
  rectMode(CENTER);
  fill('#697cab');
  rect(groundA.position.x, groundA.position.y, width, 1);
  rect(groundB.position.x, groundB.position.y, 1, height);
  rect(groundC.position.x, groundC.position.y, 1, height);

  //informant
  if (state == 1){
    background('#b7c0d7');
    button.mouseClicked(upload);
  }

  //upload text and fall
  else if (state == 2){
    background('#b7c0d7');
    Engine.update(engine);
    for (var i = 0; i < blocks.length; i++) {
      blocks[i].show();
      if (blocks[i].reachBoundary()){
        state = 3;
      }
    }
  }
  //INEEDAREST
  else if (state == 3){
    button.mouseClicked(callRest);
    for (var i = 0; i < blocks.length; i++) {
      blocks[i].disappear();
  }
}
}
//call rest
function callRest(){
  serial.write(2);
  console.log(2);
  textFont(restFont);
  textSize(350);
  fill(200,0,0);
  textAlign(CENTER,CENTER);
  text('INEEDAREST',width/2, height/2);
}
