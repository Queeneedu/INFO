let font;
let textString = 'INEEDREST';
function preload() {
  font = loadFont('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/SangSangFlowerRoad.woff');
}
function setup() {
  createCanvas(1080,720);
  background(210);
}

function draw(){
  background(255,200,0);
  textAlign(CENTER,CENTER);
   let bbox = font.textBounds(textString, mouseX, mouseY,100,CENTER,CENTER);
//   fill(255);
  stroke(255);

   rect(bbox.x, bbox.y, bbox.w, bbox.h);


   textFont(font);
   textSize(100);
   text(textString, mouseX, mouseY);
}
