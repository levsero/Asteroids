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
    }).bind(this), 1000/60);
  };

  Asteroids.GameView.prototype.bindKeyHandlers = function(){
    var view = this;
    $(document).on("keydown", function(event){
      view.shipControl(event.which);
    })
  }

  Asteroids.GameView.prototype.shipControl = function(code) {
    var ship = this.game.ship;
    console.log(ship)
    if(code === 37){
      //left
      ship.power([-1,0]);
    } else if (code === 38) {
      //up
      ship.power([0,-1]);
    } else if (code === 39) {
      //right
      ship.power([1,0]);
    } else if (code === 40) {
      //down
      ship.power([0,1]);
    }
  };
})();
