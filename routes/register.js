var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
var jwt = require('jsonwebtoken');


var url = `mongodb+srv://sandeep:sand92177@cluster0.oi6wj.mongodb.net/nodetask5?retryWrites=true&w=majority`
mongoose.connect(url);


//user-register collection of mongodb
var Schema = mongoose.Schema;
register = new Schema({

    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    confirm_password: { type: String, required: true },
    resetLink : {data:String,default:''},
    date: { type: Date, default: Date.now() },
    
},
    { collection: 'user-register' })

var UserData = mongoose.model('user-register', register);



//list all the users
router.get('/', async function (req, res) {
    await UserData.find().then((doc) => {
        return res.send({ item: doc })
    })
});



//create user or user registration
router.post('/register', async (req, res, next) => {
    const { first_name, last_name, email, password, confirm_password } = req.body
    if (!first_name || !last_name || !email || !password || !confirm_password) {
        return res.status(400).send({ message: 'plz filled the data' });
    } else {
        try {
            const userExist = await UserData.findOne({ email: email });
            if (userExist) {
                return res.status(400).send({ message: 'Email already exist' })
            } else {
                const hash = await bcrypt.hash(password, 10)
                var user_register = await UserData({ first_name, last_name, email, password: hash, confirm_password: hash });

                user_register.save();
                return res.status(200).send({ message: 'successfull' })
                next();
            }

        } catch (error) {
            return res.send({ message: 'error' })
        }
        finally {
            UserData.close();
        }
    }
})


//user login 
router.post('/singin', async (req, res, next) => {
    const { email, password } = req.body
    try {
        if (!email || !password) {
            return res.send({ message: 'plz filled the data' })

        } else {
            const singin = await UserData.findOne({ email: email });
            const isMatch = await bcrypt.compare(password, singin.password)
            if (!isMatch) {
                return res.status(401).send({ message: 'invalid user' })
            } else {
                return res.status(200).send({ message: 'login successful', singin })

                next()
            }
        }

    } catch (error) {
        return res.send({ message: 'error' })
    }
    finally {
        UserData.close();
    }


})




//email match if the email exist then password change
router.put('/forget', async (req, res, next) => {
    const { email } = req.body
    try {
        if (!email) {
            return res.send({ message: 'plz filled the data' })

        } else {
            const singin = await UserData.findOne({ email: email });
            if (singin) {
                res.status(200).send({ message: 'exist' })
                router.post('/forget/:email',async (req,res)=>{
                    const UpdatePassword = await UserData.updateOne({ email: email }, { $set: { password: req.body.password } })
                    res.send({ UpdatePassword })
                })
                
            } else {
                res.status(400).send({ messag: 'not exist' })
            }

        }

    } catch (error) {
        return res.send({ message: 'error' })
    }
    finally {
        UserData.close();
    }


})




//password change link send in gmail
router.put('/forget_password', async (req, res) => { 
    const { email } = req.body;
    UserData.findOne({ email }, (err, user) => {
        if (err || !user) {
             return res.send('email does not exit')
        } else {
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'sandeepnandanwar92@gmail.com',
                    pass: 'rfncmwkkovvsbcsv' // naturally, replace both with your real credentials or an application-specific password
                }
            });
            const token = jwt.sign({ _id: user._id }, 'sandeepnandanwar12345', { expiresIn: '5m' });
            
            const mailOptions = {
                from: 'sandeepnandanwar92@gmail.com',
                to: email,
                subject: 'Link will be expire in 5 minute',
                html: `https://vigilant-edison-543583.netlify.app/reset/${token}/${email}`
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
           return res.send(token)

         }
     });
    
})




//password update with token and email
router.put('/:token/:email', async (req, res) => {  
    
    try {
        let email = req.params.email;
    const hash = await bcrypt.hash(req.body.password, 10)
    const up = await UserData.updateOne({ email: email }, { $set: { password: hash, confirm_password: hash } })
    res.send(up)
} catch (error) {
    return res.send({ message: 'error' })
    } finally {
        UserData.close();
    }

   
    
})





module.exports = router