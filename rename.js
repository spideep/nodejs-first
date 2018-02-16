var fs = require('fs');
fs.rename('newfile2.txt', 'newfile_2.txt', function (err) {
    'use strict';
    if (err) {
        throw err;
    }
    console.log("File Renamed!");
});