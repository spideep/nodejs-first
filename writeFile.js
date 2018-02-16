var fs = require('fs');
// writeFile method replaces file and content if it exists otherwise it created the file.
fs.writeFile('newfile3.txt', 'This is the text of new file 3.', function (err) {
    'use strict';
    if (err) {
        throw err;
    }
    console.log('Replaced!');
});