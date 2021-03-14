var getFruit = function (name){
    return new Promise(function (resolve, reject) {
        var fruits = {
            pineapple: '1 => pineapple🍍',
            peach: '2 => peach🍑',
            strawberry: '3 => strawberry🍓'
        };
        resolve(fruits[name]);
    })
};
  
// getFruit('peach').then(console.log);


// Async + Await
  
var makeSmoothie = function () {
    var a =  getFruit('pineapple');
    var b =  getFruit('strawberry');
    return Promise.all([a,b]);
};
makeSmoothie().then(console.log)

// slow
const makeSmoothie2 = () => {
    var a;
    return getFruit('pineapple')
        .then(v => {
        a = v;
        return getFruit('strawberry');
        })
        .then(v => [a, v]);
};
makeSmoothie2().then(console.log);
