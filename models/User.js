const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');//14

const userSchema = new mongoose.Schema({
        fullname:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        uniquenumber:{
            type:String,
            required:true
        },
        gender:{
             type:String,
             required:true
        },
        password:{
              type:String,
              required:true
        },
        role:{
            type:String,
            required:true
        }


})

userSchema.plugin(passportLocalMongoose, { //14
    usernameField: 'uniquenumber'
})

module.exports = mongoose.model('Registration', userSchema);