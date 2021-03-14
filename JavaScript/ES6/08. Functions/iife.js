(function() {
    // Statements
    console.log("Inside IIFE ->" + " Hello, World!");
})();


(function (str) {
    console.log("Inside IIFE ->" +str);
})("Hi");

// ----------- IIFE-Counter -----------


var counter = (function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }

    return {
      increment: function() {
        changeBy(1);
      },
      decrement: function() {
        changeBy(-1);
      },
      value: function() {
        return privateCounter;
      }
    };   

  })();
  
  console.log(counter.value());  
  counter.increment();
  counter.increment();
  console.log(counter.value());  
  counter.decrement();
  console.log(counter.value()); 