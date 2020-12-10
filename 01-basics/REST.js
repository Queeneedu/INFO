
let font;
let textString = 'MOVE';
function preload() {
  font = loadFont('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/SangSangFlowerRoad.woff');
}
function setup() {
  createCanvas(1080,720);
  background(210);
  textAlign(CENTER);
  let bbox = font.textBounds(textString, width/2, height/2,300,CENTER,CENTER);
  fill(255);
  stroke(0);
  rect(bbox.x, bbox.y, bbox.w, bbox.h);
  fill(0);
  noStroke();

  textFont(font);
  textSize(300);
  text(textString, width/2, height/2);
}
