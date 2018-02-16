var fs = require('fs');
// As its name says, the appendFile method append content to an existing file, if not exists, a new file is created.
fs.appendFile('newfile.txt', 'This is my text.', function (err) {
    'use strict';
    if (err) {
        throw err;
    }
    console.log('Updated!');
});