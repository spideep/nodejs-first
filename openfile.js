var fs = require('fs');
fs.open('newfile2.txt', 'w', function (err, file) {
    'use strict';
    if (err) {
        throw err;
    }
    console.log(file);
    console.log("Saved!");
});