/**  
for (key in object) {
// executes the body for each key among object properties 
} 
*/

var user = {
    name: "Amir",
    age: 28,
    isAdmin: true
};
  
for (let key in user) {
    // keys
    console.log( key );
    // values for the keys
    console.log( user[key] ); 
}


let codes = {
    "50" : "Bangladesh",
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
};
  
for (var code in codes) {
    console.log(code); 
}


//Test
var info = {
    width: 200,
    height: 300,
    title: "My title"
};
  
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(info);

for (let key in info) {
    console.log(info[key] + " ");
}


  