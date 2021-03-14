// Basic
var getFruit = function (name){
    var fruits = {
        pineapple: '#1: pineapple🍍',
        peach: '#2: peach🍑',
        strawberry: '#3: strawberry🍓'
    };

    return new Promise(function (resolve, reject) {

        // setTimeout(function () {
        //     resolve(fruits[name]);
        // }, 5000);

       resolve(fruits[name]);
    })
};
  
// getFruit('peach').then(console.log);


// Async + Await


var makeSmoothie = function () {
    var a =  getFruit('pineapple');
    var b =  getFruit('strawberry');
    var smoothie = Promise.all([a, b]);
    return smoothie;
};
// makeSmoothie().then(console.log)


var makeSmoothieRace = function () {
    var a =  getFruit('pineapple');
    var b =  getFruit('strawberry');
    var smoothie = Promise.race([a, b]);
    return smoothie;
};
// makeSmoothieRace().then(console.log)


// slow

const makeSmoothie2 = () => {
    var a;
    return getFruit('pineapple')
        .then(function(v) {
            a = v;
            return getFruit('strawberry');
        })
        .then( function(v) { return [a, v] });
};
// makeSmoothie2().then(console.log);


// badSmoothie

var badSmoothie = function() {
    try {
        var a = getFruit('pineapple')
        var b = getFruit('strawberry');
        var smoothie = Promise.all([a, b])

        throw 'broken!'

        return smoothie;

    } catch(err) {
        console.log(err)
        // return "😬 We are going to be fine...";
        throw "💩 It's broken!"
    }
}
// badSmoothie().then(console.log);



var fruits = ['peach', 'pineapple', 'strawberry'];

var fruitLoop = function() {
  for (var f of fruits) {
    var emoji = getFruit(f);
    emoji.then(console.log);
  }
};
// fruitLoop();

//ES5
var smoothie = fruits.map(function (v){
    return getFruit(v);
})
var fruitLoopFast = async () => {
    for await (var emoji of smoothie) {
      console.log(emoji);
    }
};
// fruitLoopFast();
var fruitInspection = async () => {
    if ((await getFruit('peach')) === '#2: peach🍑') {
      console.log('looks peachy!');
    }
};
// fruitInspection();
  

// ES5
var fruitLoopFastIt = Promise.all(smoothie).then(responses => {
    var fruits = [];
    for(var  response of responses) {
        fruits.push(response)
    //   console.log(response);
    }
    return fruits;
})
fruitLoopFastIt.then(console.log);

fruitLoopFastIt.then(function(data, err){
    console.log(typeof data);
    console.log(data);
    data.forEach(function(element){
        console.log(element);
    });
})


//experiment:

