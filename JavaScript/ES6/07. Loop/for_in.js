/*
for (variable in object){
    statement
}
*/

const object = { a: 1, b: 2, c: 3 };
for (const property in object) {
    console.log(property + ":" + object[property]);
    // property = Key
}