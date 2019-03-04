window.name = "Window";

var student = {
    name: "student",
    roll: 24
}

sayHi = function() {
    alert("Hi I am " + this.name);
}

student.sayHi = sayHi;
sayHi();
student.sayHi();

