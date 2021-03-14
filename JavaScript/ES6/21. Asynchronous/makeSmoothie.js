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

var fruits = ['peach', 'pineapple', 'strawberry'];
var smoothie = fruits.map(function (v){
    return getFruit(v);
});

var fruitLoop = Promise.all(smoothie).then(responses => {
    var fruitsContainer = [];
    for(var  response of responses) {
        fruitsContainer.push(response)
    }
    return fruitsContainer;
})

fruitLoop.then(console.log);

fruitLoop.then(function(data, err){
    // console.log(typeof data);
    data.forEach(function(element){
        console.log(element);
    });
})
