var mongoose = require('mongoose');


var url = `mongodb+srv://sandeep:sand92177@cluster0.oi6wj.mongodb.net/nodetask5?retryWrites=true&w=majority`
const db = mongoose.connect(url);

var Schema = mongoose.Schema;

register = new Schema({

    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    confirm_password: { type: String, required: true },
    date: { type: Date, default: Date.now() },
},
    { collection: 'user-register' })


var UserData = mongoose.model('user-register', register);

module.exports = { UserData, db };

