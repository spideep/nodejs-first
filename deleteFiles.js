var fs = require('fs');
fs.unlink('newfile.txt', function (err) {
    'use strict';
    if (err) {
        throw err;
    }
    console.log("Deleted");
});