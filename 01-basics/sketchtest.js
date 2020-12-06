let typing, button, slider, info;


function setup() {
  // createInput Button
  createCanvas(1920, 1080,WEBGL);
  background(200);
//typing
  typing = createInput('Enter Information');
  typing.position(width/2-typing.width, height/2-200);
  typing.size(500,100);
  typing.style('font-size','50px');

  info = createP('NO')

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
  info.style("font-size", slider.value() + "pt");
  info.html(typing.value());
//아두이노로 시작 신호 보내기
}

  function draw(){

  }
