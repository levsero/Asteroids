(function () {
  if (typeof Asteroids === "undefined") {
   window.Asteroids = {};
  }

  Asteroids.GameView = function (ctx) {
    this.game = new Asteroids.Game();
    this.ctx = ctx.getContext("2d");
    // ctx.clearRect(0, 0, this.xDim, this.yDim);
  };

  Asteroids.GameView.prototype.start = function(){
    this.bindKeyHandlers();
    window.setInterval((function() {
      this.game.step(this.ctx);
      this.game.draw(this.ctx);
      this.shipControl();
    }).bind(this), 1000/60);
  };

  var keys = {};
  Asteroids.GameView.prototype.bindKeyHandlers = function(){
    var view = this;
    $(document).on("keydown", function(event){
      keys[event.which] = true;
    })
    $(document).on("keyup", function(event){
      keys[event.which] = false;
    })
  }

  Asteroids.GameView.prototype.shipControl = function() {
    var ship = this.game.ship;

    if(keys[37]){
      //left
      ship.power([-.1,0]);
    }
    if (keys[38]) {
      //up
      ship.power([0,-.1]);
    }
    if (keys[39]) {
      //right
      ship.power([.1,0]);
    }
    if (keys[40]) {
      //down
      ship.power([0,.1]);
    }
    if (keys[32]){
      ship.fireBullet();
      keys[32] = false;
    }
  };
})();
