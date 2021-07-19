//const{Schema, model} = require('mongoose')
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    //name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    //phone:{type:String, required:true},
    encryptedPassword:{type:String, required:true},
    //check_password:{type:String, required:true},
})

module.exports = mongoose.model('Admin', schema)
