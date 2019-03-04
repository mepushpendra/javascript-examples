function add(x, y, callback) {
    let z = x+y;
    setTimeout(() => callback(z), 3000);
}

add(5, 67, function(out) {
   console.log(out); 
});

add(5, 67, function(out) {
  document.write(out); 
});