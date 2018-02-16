var nodemailer = require('nodemailer');

var from = 'micuenta@gmail.com';
var to = 'tucuenta@gmail.com';
var user = 'micuenta@gmail.com';
var pass = 'good-password';


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: user,
        pass: pass
    }
});

var mailOptions = {
    from: from,
    to: to,
    subject: 'Sending email using Node.js',
    text: 'Email body'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});