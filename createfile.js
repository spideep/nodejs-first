var fs = require('fs');
// If the file exists the data will be append otherwise a new file will be created.
fs.appendFile('newfile.txt', 'This is the data! eureka', function (err) {
    'use sctrict';
    if (err) {
        throw err;
    }
    console.log('Saved!');
});