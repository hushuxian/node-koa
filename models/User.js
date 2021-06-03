const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String
})


let User= mongoose.model('User',UserSchema)
module.exports = User