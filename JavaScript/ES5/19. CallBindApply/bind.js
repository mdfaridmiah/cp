// boundFunc = func.bind(thisArg[, arg1[, arg2[, ...argN]]])
// argument: this, arg1, arg2, ...argN


var Amir = {
    name: 'Amir',
    age: 28,
    job: 'programmer',
    occupation: 'Software Engineer',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
        this.occupation = 'Software Engineer';
    }
};

var Anny = {
    name: 'Anny',
    age: 38,
    job: 'teacher'
};

var AmirFriendly = Amir.presentation.bind(Amir, 'friendly');

console.log(typeof AmirFriendly);

// AmirFriendly('morning');
// AmirFriendly('night');



// var AnnyFormal = Amir.presentation.bind(Anny, 'formal', 'afternoon');
// AnnyFormal();

// var AnnyFormal = Amir.presentation.bind(Anny);
// AnnyFormal('friendly', 'afternoon');


var AnnyFormal = Amir.presentation.bind(Anny, 'formal');
AnnyFormal('afternoon');

// ----------- Another cool example -----------

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2021 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

// find the ages with callBack  
var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);

