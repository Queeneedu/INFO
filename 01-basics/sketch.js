//Dom 인터페이스
let typing, button, slider;
let info, infoSize;
let font;
let colorBG;
let state;

//matter.js Class
var Engine = Matter.Engine;
var Render = Matter.Render;
var World = Matter.World;
var Bodies = Matter.Bodies;


var engine;
var boxA, ground;

function preload() {
  font = loadFont('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/SangSangFlowerRoad.woff');
}

function setup(){
    state = 1;
    colorBG = color(0,0,255);
    createCanvas(1920, 1080);
    background(255,200,0);

  //typing
    textAlign(CENTER,CENTER);
    typing = createInput('Enter Information');
    typing.position(width/2-typing.width, height/2-200);
    typing.size(500,100);
    typing.style('font-size','50px');

  //Sendbutton
    button = createButton('Send');
    button.position(width/2, height/2 + 200);
    button.size(200,100);
    button.mousePressed(update);

    //슬라이더
    slider = createSlider(1,100,1); //(범위min,max,시작0)
    slider.position(width/2,height/2);
    slider.style('width','200px');
    slider.style('height','100px');


    engine = Engine.create();
    boxA = Bodies.rectangle(500,0, 100, 200);
    ground = Bodies.rectangle(0, height, width, 20,
       {isStatic: true}
     );
     World.add(engine.world, [boxA, ground]); //박스는 나중에 추가하기
    Engine.run(engine);
}

function update(){
  info = typing.value();
  infoSize = slider.value();
  state = 2;
}


function draw(){
  background(colorBG);
  if (state == 1){
    colorBG = color(255,0,0);
  }
  else if (state == 2){
    colorBG = color(0,255,0);
    // textBox();
    fill(255);
    drawVertices(boxA.vertices);
    fill(128);
    drawVertices(ground.vertices);
  }
}

function textBox(){
  textAlign(CENTER);
  let bbox = font.textBounds(info, width/2, height/2,infoSize,CENTER,CENTER);
  fill(255);
  stroke(0);
  rect(bbox.x, bbox.y, bbox.w, bbox.h);
  fill(0);
  noStroke();

  textFont(font);
  textSize(infoSize);
  text(info, width/2, height/2);
}

function drawVertices(vertices) {
  beginShape();
  for (var i = 0; i < vertices.length; i++) {
    vertex(vertices[i].x, vertices[i].y);
  }
  endShape(CLOSE);
}
