console.log(Date());
console.log(new Date());
console.log(Date.now());
console.log(Date.parse());


var e = new Date('August 19, 1975 23:15:30 UTC');

var jsonDate = e.toJSON();
console.log(typeof jsonDate + " "+ typeof e);
console.log(jsonDate);
console.log(new Date(jsonDate).toUTCString());
 

var date = new Date(Date.now());
console.log(date);
console.log(date.getTime());
console.log(Date.parse(date));
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getMilliseconds());

console.log(date.toString());
console.log(date.toISOString());
console.log(date.toTimeString());



date.setDate(24);
console.log(date.getDate());












