let typing, button, slider, info,font;

function preload() {
  font = loadFont('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/SangSangFlowerRoad.woff');
}

function setup() {
  // createInput Button
  createCanvas(1920, 1080,WEBGL);
  background(200);
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
}

function update(){
  info = typing.value();
  infoSize = slider.value();
}




  function draw(){
    //아두이노에서 신호받기 -> 정보 떨어지기

  }
