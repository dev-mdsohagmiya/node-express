const app = require("./app/app");
const http = require("http")
const mongoose = require("mongoose")
const server = http.createServer(app)

server.listen(2020,()=>{
    console.log("app run success...")
    //connect mongodb database (start)
    mongoose.connect("paste your database cannection url").then(()=>{
        console.log("database connected..")
   
    }).catch((err)=>{
        console.log(err)
    })
    //connect mongodb database (end)

})



