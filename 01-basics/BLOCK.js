
function Block(x, y, w, h, infoT) {
  this.body = Bodies.rectangle(x, y, w, h);
  this.w = w;
  this.h = h;
  World.add(world, this.body);

  this.show = function() {
     var pos = this.body.position;
     var angle = this.body.angle;
     push();
     translate(pos.x, pos.y);
     rotate(angle);
     // fill(255);
     // rect(0,0,w,h);

     rectMode(CENTER);
     fill('#87909A');
     textAlign(CENTER,CENTER);
     textFont(basicFont);
     textSize(this.h);
     text(infoT, 0, 0);
     pop();
  }
}
