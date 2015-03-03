(function () {
  if (typeof Asteroids === "undefined") {
   window.Asteroids = {};
  }

  var COLOR = "green";
  var RADIUS = 30;


  var Asteroid = Asteroids.Asteroid = function(options) {
    var vel = Asteroids.Util.randomVec(2);
    options.color = COLOR;
    options.radius = RADIUS;
    options.vel = vel;
    Asteroids.MovingObject.call(this, options);
  }

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);


  Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      console.log(this, otherObject)
      otherObject.relocate();
    }
  };

})();
