var fs = require('fs');

var dataBuffer = fs.readFileSync('./files/friends.json')
console.log(typeof dataBuffer);
console.log("dataBuffer: "+ dataBuffer);

var dataJSON = dataBuffer.toString()
console.log(typeof dataJSON);
console.log("dataJSON: "+ dataJSON);

var user = JSON.parse(dataJSON)
console.log(typeof user);
console.log("User: "+ user);

user[0].name = "Adnan Biswas";

var userJSON = JSON.stringify(user)
fs.writeFileSync('./files/writeFileSyncFriendsV1.json', userJSON)