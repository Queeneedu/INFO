
function Block(x, y, w, h, infoT, lifeSpan) {
  this.body = Bodies.rectangle(x, y, w, h);
  this.w = w;
  this.h = h;
  lifeSpan = map(lifeSpan,10,100,255,500);
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
     fill(135,144,154,lifeSpan);
     textAlign(CENTER,CENTER);
     textFont(basicFont);
     textSize(this.h);
     text(infoT, 0, 0);
     pop();

     if (state == 3)  {
       lifeSpan = lifeSpan-10;
     }
  }

  this.reachBoundary = function(){
    let pos = this.body.position;
    if(pos.y < - 200) {
      return true;
    } else {
      return false;
    }
  }

  this.disappear = function(){
    World.remove(world,this.body);
  }
}
