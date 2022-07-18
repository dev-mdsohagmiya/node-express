const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const globalMiddleware = [express.json(),morgan('dev'),cors()]

module.exports = globalMiddleware