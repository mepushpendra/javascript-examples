//Create an empty constructor function
function Person(){
}
//Add property name, age to the prototype property of the Person constructor function
Person.prototype.name = "Ashwin" ;
Person.prototype.age = 26;
Person.prototype.friends = ['Jadeja', 'Vijay'],//Arrays are of reference type in JavaScript
Person.prototype.sayName = function(){
	console.log("Name=" + this.name);
}

var person1= new Person();
var person2 = new Person();
person1.friends.push("Dhoni");
console.log(person1.friends);
console.log(person2.friends);

