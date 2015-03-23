(function () {
  if (typeof Asteroids === "undefined") {
   window.Asteroids = {};
  }

   var Game = Asteroids.Game = function () {
    this.ship = new Asteroids.Ship({ game: this });
    this.asteroids = [];
    this.bullets = [];
    this.addAsteroids();
  };

  var DIM_X = 500;
  var DIM_Y = 500;
  Game.DIM_X = 500;
  Game.DIM_Y = 500;
  var NUM_ASTEROIDS = 5;

  Game.prototype.addAsteroids = function () {
    for (var i = 0; i < NUM_ASTEROIDS; i++) {
      var pos = Asteroids.Util.randomPos(500);
      this.add(new Asteroids.Asteroid( {pos: pos, game: this} ));
    }
  }

  Game.prototype.isOutOfBounds = function (pos) {
    if (pos[0] < 0 || pos[0] > DIM_X) {
      return true;
    }
    if (pos[1] < 0 || pos[1] > DIM_Y) {
      return true;
    }
    return false;
  }

  Game.prototype.add = function (object) {
  if (object instanceof Asteroids.Asteroid) {
    this.asteroids.push(object);
  } else if (object instanceof Asteroids.Bullet) {
    this.bullets.push(object);
  }
};

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, DIM_X, DIM_Y);
    this.allObjects().forEach(function (el) {
      el.draw(ctx);
    })
  }

  Game.prototype.moveObjects = function (ctx) {
    ctx.clearRect;
    this.allObjects().forEach(function (el) {
      el.move();
    })
  }

  Game.wrap = function (pos) {
    if (pos[0] < 0) {
      pos[0] = DIM_X;
    } else if (pos[0] > DIM_X) {
      pos[0] = 0;
    }
    if (pos[1] < 0) {
      pos[1] = DIM_Y;
    } else if (pos[1] > DIM_Y) {
      pos[1] = 0;
    }
    return pos;
  }

  Game.prototype.checkCollisions = function () {
    var game = this;

    // switch toindex and only check against higher index to reduce checks
    this.allObjects().forEach(function (obj1) {
      game.allObjects().forEach(function (obj2) {
        if (obj1 == obj2) {
          // don't allow self-collision
          return;
        }
        if (obj1.isCollidedWith(obj2)) {
          obj1.collideWith(obj2);
        }
      });
    });
  };

  Game.prototype.step = function(ctx){
    this.moveObjects(ctx);
    this.checkCollisions();
  }

  Game.prototype.allObjects = function(){
    return this.asteroids.concat(this.ship).concat(this.bullets)
  }

  Game.prototype.remove = function (object) {
    if (object instanceof Asteroids.Bullet) {
      this.bullets.splice(this.bullets.indexOf(object), 1);
    } else if (object instanceof Asteroids.Asteroid) {
      this.asteroids.splice(this.asteroids.indexOf(object), 1);
    }
  };

})();
