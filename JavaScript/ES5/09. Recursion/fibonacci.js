/**
Fib[1]= 1, Fib[2] = 1
Fib(i) = Fib(i-1) + Fib(i-2); 

**/

var vis = [];
var fib = function (n) {
    if (n <= 2 ) vis[n] = 1;
    if (vis[n]) return vis[n];
    vis[n] = fib(n-1) + fib(n-2);
    return vis[n];
}

for(var i = 1; i <= 10; i++){
    console.log(fib(i) + " ");
}
