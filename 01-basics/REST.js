let koFont;

function preload(){
  koFont = loadFont('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/SangSangFlowerRoad.woff');
}

function setup() {
  createCanvas(1080,720);
}

function draw() {
  background(200);
  textFont(koFont);
  textAlign(CENTER,CENTER);
  textSize(300);
  fill(255, 0, 0);
  text("INEEDREST",width/2,height/2);


}
