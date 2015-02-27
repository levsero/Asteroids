(function () {
  if (typeof Asteroids === "undefined") {
   window.Asteroids = {};
  }

  var COLOR = "blue";
  var RADIUS = 15;
  var pos = Asteroids.Util.randomPos(500)

  var Ship = Asteroids.Ship = function () {
    Asteroids.MovingObject.call(this, {color: COLOR, radius: RADIUS, pos: pos,
      vel: [0,0]})
  };

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject)

  Ship.prototype.power = function (impulse) {
    this.vel = [this.vel[0] + impulse[0], this.vel[1] + impulse[1]];
  }

})();
