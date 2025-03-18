const express = require('express')
const route = express.Router()
const register = require('./usercontroller')

route.post("/auth/signup",register)
module.exports = route;