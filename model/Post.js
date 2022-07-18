const mongoose = require("mongoose")
const Post = new mongoose.Schema({
    id:String,
    post:{
        type: [String],
        validate: v => Array.isArray(v) && v.length > 0,
    }
       
    
})

module.exports  = mongoose.model("post",Post)