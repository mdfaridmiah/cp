// The push() method adds one or more elements to the end of an array and returns the new length of the array.
// push back
// syntax: arr.push([element1[, ...[, elementN]]])

// ----------- Example-1 -----------
var animals = ['pigs', 'goats', 'sheep'];

var count = animals.push('cows');
console.log(count);
console.log(animals);
animals.push('chickens', 'cats', 'dogs');
console.log(animals);


// ----------- Merging two arrays -----------
var vegetables = ['parsnip', 'potato']
var moreVegs = ['celery', 'beetroot']
// Merge the second array into the first one
// Equivalent to vegetables.push('celery', 'beetroot')
Array.prototype.push.apply(vegetables, moreVegs)
console.log(vegetables) 


// ----------- Using an object in an array -----------
var obj = {
    length: 0,
    addElem: function (elem) {
        // obj.length is automatically incremented
        // every time an element is added.
        [].push.call(this, elem)
    }
}

// Let's add some empty objects just to illustrate.
obj.addElem({})
obj.addElem({})
console.log(obj.length)
