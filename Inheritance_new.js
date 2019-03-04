//SuperType constructor function
function SuperType(firstName, lastName){
	this.firstName = "Virat",
	this.lastName = "Kohli",
	this.friends = ["Ashwin", "Jadeja"]
}

//SuperType prototype
SuperType.prototype.getSuperName = function(){
	return this.firstName + " " + this.lastName;
}

//SubType prototype function
function SubType(firstName, lastName, age){
	//Inherit instance properties
	SuperType.call(this, firstName, lastName);
	this.age = age;
}

//Inherit methods and shared properties
SubType.prototype = new SuperType();

//Add new property to SubType prototype
SubType.prototype.getSubAge = function(){
	return this.age;
}

//Create SubType objects
var subTypeObj1= new SubType("Virat", "Kohli", 26);
var subTypeObj2 = new SubType("Sachin", "Tendulkar", 39);

console.log(subTypeObj1);
console.log(subTypeObj2);


