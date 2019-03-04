var counter = function() {
   var count = 0;
   return function() { return ++count; } 
}();

counter();
counter();
counter();
counter();