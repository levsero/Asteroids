Function.prototype.inherits = function(SuperClass) {
  function Surrogate(){  };
  Surrogate.prototype = SuperClass.prototype;
  this.prototype = new Surrogate();
}

function Animal (name) {
  this.name = name;
}

Animal.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

function Dog (name, coatColor) {
  Animal.call(this, name);
  this.coatColor = coatColor;
};

Dog.inherits(Animal);

Dog.prototype.bark = function () {
  console.log("Bark!");
};


var dog = new Dog("spot", "blue");
dog.sayHello();

var cow = new Animal("moo");
cow.bark();
