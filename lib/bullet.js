(function () {
  if (typeof Asteroids === "undefined") {
   window.Asteroids = {};
  }

  var COLOR = "orange";
  var RADIUS = 5;
  // var pos = Asteroids.Util.randomPos(500)

  var Bullet = Asteroids.Bullet = function (options) {
    options.color = COLOR;
    options.radius = RADIUS;
    Asteroids.MovingObject.call(this, options)
  };

  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);

  Bullet.prototype.isWrappable = false;

  Bullet.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Asteroid) {
      this.game.remove(this);
      otherObject.hit();
    }
  };



})();
