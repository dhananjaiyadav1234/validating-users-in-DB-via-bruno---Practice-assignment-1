const mongoose = require('mongoose')
require("dotenv").config()

const connect = async() => {
    try{
        await mongoose.connect(process.env.DB_url)
        console.log("connected to data base")

    }
    catch(err){
        console.log(`Err connecting DB : ${err}`)

    }
}


module.exports = connect;