//Create an empty constructor function
function Person(name, age){
    this.name = "" || name;
    this.age = 26 || age;
    this.friends = ['Jadeja', 'Vijay'];
}

Person.prototype.sayName = function(){
	console.log("Name=" + this.name);
}

var person1= new Person("Yuvi", 35);
var person2 = new Person("Raina", 32);
person1.friends.push("Dhoni");
console.log(person1.friends);
console.log(person2.friends);

