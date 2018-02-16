var fs = require('fs');
// Writefile method replaces file if this exists otherwise create a new one.
fs.writeFile('newfile3.txt', 'This is data for newfile3.txt', function (err) {
    'use strict';
    if (err) {
        throw err;
    }
    console.log('Saved!');
});