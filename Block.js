function Block(x, y, w, h, infoT,lifeSpan) {
  this.body = Bodies.rectangle(x, y, w, h);
  this.w = w;
  this.h = h;
  lifeSpan = map(lifeSpan,10,100,255,500);
  World.add(world, this.body);


//show text
    this.show = function() {
      let pos = this.body.position;
      let angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(135,144,154,lifeSpan);
      textAlign(CENTER,CENTER);
      textFont(basicFont);
      textSize(this.h);
      text(infoT, 0, 0);
      pop();
      }


    this.reachBoundary = function(){
      let pos = this.body.position;
      if(pos.y < - 200) {
        return true;
      }
    }

    this.disappear = function(){
      World.remove(world,this.body);
  }
}
