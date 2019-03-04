function Animal(name) {
  this.name = name;
}

Animal.prototype = {
  sleep: function() {
  console.log(this.name + " is sleeping shhhhh shhhhh");
},
  getNumberOfFeets: function() {
    console.log(`${this.name} is an animal and has 4 feets`);
  }
}

Animal.prototype.makeSound = function() {
}

function Dog(name) {
  Animal.call(this, name);
}

function Cat(name) {
  console.log("This is pointing to", this);
  this.tail = true;
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.makeSound = function() {
  console.log(this.name + " is barking");
}

Object.prototype.getNumberOfFeets = function() {
  console.log(this.name + " is a special animal with four feet");
}

var dog1= new Dog("Tommy");
dog1.getNumberOfFeets();
dog1.sleep();
dog1.makeSound();

Cat.prototype = Object.create(Animal.prototype);
// Cat.prototype.constructor = Cat;
Cat.prototype.makeSound = function(){
  console.log(this.name + " is doing meow meow");
}

cat1 = new Cat("Rozy");
cat1.getNumberOfFeets();
cat1.sleep();
cat1.makeSound();
