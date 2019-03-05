// Promises handle asynchronous operations in JavaScript
let promise = new Promise(function(resolve, reject){
  setTimeout(() => resolve("Result from promise"), 4000);
});

promise.then(function(result) {
  console.log(result); // "Stuff worked!"
}).catch(error => {
  console.log("Error", error);
});

console.log("This will execute before promise result is returned");
