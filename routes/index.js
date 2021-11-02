var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");

router.get("/sendemail", function (req, res, next) {


  const num = Math.floor(Math.random() * (999999 - 100000)) + 100000;
  const otp = num.toString();
  console.log(otp)

  // async..await is not allowed in global scope, must use a wrapper


  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sandeepnandanwar92@gmail.com',
      // pass: 'rfncmwkkovvsbcsv' // naturally, replace both with your real credentials or an application-specific password
    }
  });

  const mailOptions = {
    from: 'sandeepnandanwar92@gmail.com',
    to: 'sandeepnandanwar92@gmail.com',
    subject: 'Invoices due',
    text: otp
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

});

module.exports = router;