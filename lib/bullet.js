(function () {
  if (typeof Asteroids === "undefined") {
   window.Asteroids = {};
  }

  var COLOR = "blue";
  var RADIUS = 15;
  var pos = Asteroids.Util.randomPos(500)

  var Bullet = Asteroids.Bullet = function () {
    Asteroids.MovingObject.call(this, {color: COLOR, radius: RADIUS, pos: pos,
      vel: [0,0]})
  };

  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject)
})();
