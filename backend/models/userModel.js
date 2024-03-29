const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
        unique: true,
        index: true
    },
    lastname:{
        type: String,
        required: true,
       
    },
    email:{
        type: String,
        required: true,
        unique: true
    }, 
    mobile:{
        type: String,
        required: true,
        unique: true  
    },
    password:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model("user", userSchema)