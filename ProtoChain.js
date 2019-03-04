function Player(name, age, game) {
  this.name = name;
  this.age = age;
  this.game = game;
  this.displayInfo = function() {
  console.log('from player class');
}
}

Player.prototype.displayInfo = function() {
  console.log(`${this.name} is a ${this.game} player and has age ${this.age}`);
}

function Cricketer(name, age) {
  Player.call(this, name, age, 'cricket');
//   this.displayInfo = function() {
//   console.log('from cricketer class');
// }
}

Cricketer.prototype = Object.create(Player.prototype);
Cricketer.prototype.constructor = Cricketer;

var cricketer1 = new Cricketer("Virat", 29);
console.log(cricketer1);

var cricketer2 = new Cricketer("Dhoni", 39);
console.log(cricketer2);
