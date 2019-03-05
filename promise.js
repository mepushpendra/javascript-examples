let promise = new Promise(function(resolve, reject){
  if(true) {
    resolve("Promise returned result");
  } else {
    reject(Error("Error returned by promise"));
  }
});

promise.then(function(result) {
  console.log(result); // "Stuff worked!"
}).catch(error => {
  console.log("Error", error);
});
