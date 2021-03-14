var getFruit = function (name){
    return new Promise(function (resolve, reject) {
        var fruits = {
            pineapple: '1 => 🍍',
            peach: '2 => 🍑',
            strawberry: '3 => 🍓'
          };
          resolve(fruits[name]);
    })
};
  
getFruit('peach').then(console.log);
