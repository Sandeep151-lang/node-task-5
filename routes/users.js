var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
// const otpGenerator = require('otp-generator')
var TokenAgent = require("jwt-otp");
var generateOtp = require('speakeasy')
/* GET users listing. */
router.post('/jwt', function (req, res, next) {

  // var sessionAgent = new TokenAgent();
  // var token = sessionAgent.setIssuingSecret(Math.random())

  // console.log(token)
  // otpGenerator.generate(6, { digits: true });
  // console.log(otpGenerator)
  // const token = jwt.sign({
  //   data: 1
  // }, 's', { expiresIn: '5s' });
  // console.log(token)

  // var older_token = jwt.sign({ foo: 'bar', iat: Math.floor(Date.now() / 1000) - 30 }, 'shhhhh');
  // console.log(older_token)
});

module.exports = router;
