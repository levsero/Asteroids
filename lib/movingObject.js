(function () {
  if (typeof Asteroids === "undefined") {
   window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function (options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
  };

  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    )

    if (this instanceof Asteroids.Ship) {
      // console.log(this.pos);
      // console.log(this.)
      ctx.beginPath();
      ctx.moveTo(this.pos[0]+12,this.pos[1]);
      ctx.lineTo(this.pos[0]-12,this.pos[1]+10);
      ctx.lineTo(this.pos[0]-12,this.pos[1]-10);
      ctx.lineTo(this.pos[0]+12,this.pos[1]);
    }

    ctx.fill();
  };

  MovingObject.prototype.isWrappable = true;

  MovingObject.prototype.move = function(){
    var vel = this.vel;
    var pos = this.pos;

    this.pos = [ pos[0] + vel[0] , pos[1] + vel[1]];

    if (this.game.isOutOfBounds(pos)) {
      if(this.isWrappable){
        this.pos = wrap(pos);
      } else {
        this.game.remove(this);
      }
    }
  };

  wrap = function (pos) {
    if (pos[0] < 0) {
      pos[0] = Asteroids.Game.DIM_X;
    } else if (pos[0] > Asteroids.Game.DIM_X) {
      pos[0] = 0;
    }
    if (pos[1] < 0) {
      pos[1] = Asteroids.Game.DIM_Y;
    } else if (pos[1] > Asteroids.Game.DIM_Y) {
      pos[1] = 0;
    }
    return pos;
  }

  MovingObject.prototype.isCollidedWith = function(otherObject){
    dist = Asteroids.Util.dist(this.pos, otherObject.pos)
    return ((this.radius + otherObject.radius) < dist) ? false : true
  };

  MovingObject.prototype.collideWith = function (otherObject) {
    ; // default do nothing
  };
})();
