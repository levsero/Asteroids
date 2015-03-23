(function () {
  if (typeof Asteroids === "undefined") {
   window.Asteroids = {};
  }

  var COLOR = "blue";
  var RADIUS = 15;
  var pos = Asteroids.Util.randomPos(500);
  var MAX_SPEED = 7;

  var Ship = Asteroids.Ship = function (options) {
    options.color = COLOR;
    options.radius = RADIUS;
    options.pos = pos;
    options.vel = [0,0]
    Asteroids.MovingObject.call(this, options)
    this.direction = [1,0]
  };

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject)

  Ship.prototype.power = function (impulse) {
    if(Math.abs(this.vel[0] + impulse[0]) <= MAX_SPEED ){
      this.vel[0] += impulse[0];
    }
    if(Math.abs(this.vel[1] + impulse[1]) <= MAX_SPEED ){
      this.vel[1] += impulse[1];
    }
  };

  Ship.prototype.fireBullet = function () {
    var vel;
    if(this.vel[0] === 0 && this.vel[1] === 0){
      vel = [ (this.vel[0]) * 2, (this.vel[1] +1 ) * 2 ];
    } else {
      vel = [ (this.vel[0]) * 2, (this.vel[1] ) * 2 ];
    }

    var bullet = new Asteroids.Bullet({
      pos: this.pos,
      vel: vel,
      game: this.game
    });
    this.game.add(bullet);
  };

  Ship.prototype.relocate = function () {
    this.pos = Asteroids.Util.randomPos(500);
    this.vel = [0,0]
  }

})();
