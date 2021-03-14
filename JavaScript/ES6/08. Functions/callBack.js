function displayer(sum) {
    console.log("Sum: "+ sum)  
}
  
function myCalculator(num1, num2, Callback) {
    var sum = num1 + num2;
    Callback(sum);
}
myCalculator(10, 20, displayer);
  

  