var fs = require('fs');


// fs.readFile(srcPath, 'utf8', function (err, data){ })
function readFile (srcPath) {
    return new Promise(function (resolve, reject) {
      fs.readFile(srcPath, function (err, data) {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    })
}


function writeFile (savPath, data) {
    return new Promise(function (resolve, reject) {
        fs.writeFile(savPath, data, function (err) {
        if (err) {
            reject(err)
        } else {
            resolve(console.log("Completed.."));
        }
        })
    })
}

var srcPath = './files/friends.json';
var savPath = './files/WriteFileAsyncFriendsV2.json';


readFile(srcPath).then(function (results) {

    results = JSON.parse(results);
    console.log("Befor: ");
    console.log(results);
    results[0].name = "Mr. Adnan Biswas";
    console.log("After: ");
    console.log(results);
    results = JSON.stringify(results);
    return writeFile(savPath, results)

}).then(function () {
    console.log("Done!");
})


// ES6:
 
// const results = await readFile(srcPath)
// Uptodate
// await writeFile(savPath, results)

