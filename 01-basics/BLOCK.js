let cWidth;
let bbox;
function Block(x, y, w, h, infoT) {
  this.body = Bodies.rectangle(x, y, w, h);
  this.w = w;
  this.h = h;
  World.add(world, this.body);

  this.show = function() {
     var pos = this.body.position;
     var angle = this.body.angle;
     // push();
     // translate(pos.x, pos.y);
     // rotate(angle);
     rectMode(CENTER);
     stroke(255);
     fill(255);
     rect(pos.x,pos.y,this.w,this.h);
     fill(0);
     noStroke();
     textAlign(CENTER,CENTER);
     textFont(basicFont);
     textSize(this.h);
     text(infoT, pos.x, pos.y);
     // pop();
  }
}
