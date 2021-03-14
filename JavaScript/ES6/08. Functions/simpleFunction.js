var calculate  = function(n) {
    var sum = 0;
    for(var i = 1; i  <= n; i++){
        sum += i;
    }
    return sum;
 }

var ans = calculate(10);
console.log(typeof calculate)
console.log(ans);
