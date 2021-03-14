var fs = require('fs');

var getFileContent = function(srcPath) {
    try {
        var dataBuffer = fs.readFileSync(srcPath);
        var dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

var saveFileContent = function(savPath, fileData) {
    const dataJSON = JSON.stringify(fileData)
    fs.writeFileSync(savPath, dataJSON)
}

var srcPath = './files/friends.json';
var savPath = './files/writeFileSyncFriendsV2.json';

var friends = getFileContent(srcPath);
friends[0].name = "Mr. Adnan Biswas";
saveFileContent(savPath, friends);

