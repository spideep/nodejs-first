var fs = require('fs');
fs.appendFile('newfile.txt', 'This is the data! eureka', function (err) {
    'use sctrict';
    if (err) {
        throw err;
    }
    console.log('Saved!');
});