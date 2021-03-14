var fs = require('fs');


// fs.readFile(srcPath, 'utf8', function (err, data){ })
function getFileContent(srcPath, callback) { 
    fs.readFile(srcPath, function (err, data) {
        try{
            callback(JSON.parse(data));
        }catch{
            return [];
        }
    });
}

function saveFileContent(savPath, srcPath) { 
    getFileContent(srcPath, function(data) {
        data[0].name = "Adnan Biswas9";
        data = JSON.stringify(data);
        fs.writeFile (savPath, data, function(err) {
            try{
                console.log('complete');
            }catch{
                throw err;
            }
        });
    });
}

var srcPath = './files/friends.json';
var savPath = './files/WriteFileAsyncFriendsV1.json';

saveFileContent(savPath, srcPath);

