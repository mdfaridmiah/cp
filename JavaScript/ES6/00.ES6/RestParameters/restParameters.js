/**
 Rest parameters: The rest parameter syntax allows a function to accept an indefinite number of arguments as an array
 */

 //ES5
 console.log("Rest parameters es5.....");
function isFullAge55() {
  console.log(arguments);
  var argsArr = Array.prototype.slice.call(arguments);

  argsArr.forEach(function(cur) {
      console.log((2021 - cur) >= 18);
      console.log(cur);
  })
}
// isFullAge55(1990, 1999, 1965);
isFullAge55(1990, 1999, 1965, 2016, 1987);


//ES6
console.log("Rest parameters es-6.....");
isFullAge66 = (...years)=> {
  years.forEach( cur => console.log( (2021 - cur) >= 18 ) );
}
isFullAge66(1990, 1999, 1965, 2016, 1987);


//ES5
console.log("Rest parameters (limit) es5.....");
function isFullAge56(limit) {
  var argsArr = Array.prototype.slice.call(arguments, 1);

  argsArr.forEach(function(cur) {
      console.log(limit); 
      console.log((2021 - cur) >= limit);
  })
}
isFullAge56(16, 1990, 1999, 1965);
isFullAge56(1990, 1999, 1965, 2016, 1987);

//ES6
console.log("Rest parameters (limit) es6.....");
function isFullAge6(limit, ...years) { 
  years.forEach(cur => console.log( (2021 - cur) >= limit));
}
isFullAge6(16, 1990, 1999, 1965, 2016, 1987);

console.log("Rest parameters End.....");
