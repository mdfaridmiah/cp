// func.apply(thisArg, [ argsArray])
// argument: this, []

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

Amir.presentation.apply(Anny, ['friendly', 'afternoon']);
console.log(Anny);