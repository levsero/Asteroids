(function () {
  if (typeof Asteroids === "undefined") {
   window.Asteroids = {};
  }
  
  var COLOR = "green";
  var RADIUS = 30;

  var Asteroid = Asteroids.Asteroid = function(options) {
    var vel = Asteroids.Util.randomVec(2);
    options.color = options.color || COLOR;
    options.radius = options.radius || RADIUS;
    options.vel = options.vel || vel;
    Asteroids.MovingObject.call(this, options);
  }

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.hit = function () {

    if (this.radius === 30 ) {
      for( var i = 0; i < 2; i++) {
      var asteroid = new Asteroids.Asteroid( {
        pos: this.pos,
        game: this.game,
        radius: this.radius/2,
        vel: Asteroids.Util.randomVec(2),
        color: this.color,
        } )
        this.game.add(asteroid);
      }
    }
    this.game.remove(this)
  }

  Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
    }
  };

})();
