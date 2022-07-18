const test = require("../test/test")

const express = require("express")
test()
const raffleRouter = require("../controllers/raffle")
const app  = express()
const globalMiddleware = require("../middleware/global")

//test


app.use(globalMiddleware)
app.use("/api/v1",raffleRouter)


module.exports = app

