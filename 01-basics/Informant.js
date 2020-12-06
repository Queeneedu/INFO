let typing, button, slider, info;

class Informant {
  constructor() {
  }

  Typing(){
    typing = createInput('Enter Information');
    typing.position(width/2-typing.width, height/2-200);
    typing.size(500,100);
    typing.style('font-size','50px');

    info = createP('NO')
  }

  SendButton(){
    button = createButton('Send');
    button.position(width/2, height/2 + 200);
    button.size(200,100);
    button.mousePressed(Informant.Update);
  }

  Slider(){
    slider = createSlider(1,100,100); //(범위min,max,시작0)
    slider.position(width/2,height/2);
    slider.style('width','200px');
    slider.style('height','100px');
  }

  // Update(){
  //   info.style("font-size", slider.value() + "pt");
  //   info.html(typing.value());
  //   //아두이노로 시작 신호 보내기
  //   }
 }
