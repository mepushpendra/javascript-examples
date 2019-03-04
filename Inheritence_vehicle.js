function Vehicle(make, model, price, numOfWheels, fuelType) {
  this.make = make;
  this.model = model;
  this.price = price;
  this.numOfWheels = numOfWheels;
  this.fuelType = fuelType;
}

Vehicle.prototype.getNumOfWheels = function() {
  console.log(`This vehicle has ${this.numOfWheels} wheels`);
};

function Car(make, model, price, fuelType) {
  Vehicle.call(this, make, model, price, 4, fuelType);
};


// Prototype for Car
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.getNumOfWheels = function() {
  	console.log("Car has 4 wheels");
}
Car.prototype.constructor = Car;
console.log('Car.prototype.constructor is ' + Car.prototype.constructor);

car1 = new Car('Maruti', 'Swift Dzire', 800000, 'Diesel');
console.log("Car1 Details", car1);
car1.getNumOfWheels();

// Prototype for Bike
var Bike = function(make, model, price) {
  Vehicle.call(this, make, model, price, 2, 'Petrol');
}

Bike.prototype = Object.create(Vehicle.prototype);
Bike.prototype.constructor = Bike;

bike1 = new Bike('Bajaj', 'Pulsar 150', 75000);
console.log("Bike details", bike1);
bike1.getNumOfWheels();