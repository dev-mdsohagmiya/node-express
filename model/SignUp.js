const mongoose =require("mongoose")

const SignUp = new mongoose.Schema({

    fastname:String,
    lastname:String,
    useremail:String,
    password:String
})

module.exports =  mongoose.model("Test",SignUp)