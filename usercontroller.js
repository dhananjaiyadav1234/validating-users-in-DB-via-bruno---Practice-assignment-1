const User = require('./schema')
const bcrypt = require('bcryptjs')

const register = async(req,res) =>{
    try{
        const {name,email,password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({
                message: `all fields are required`
            })
        }
        const hashedPassword = await bcrypt.hash(password,10)
        const user = User.create({
            name,email,password: hashedPassword

        })

        res.status(201).json({
            message:`registration succesful`
        })



    }
    catch(err){
        res.status(500).json({
            message: `internal server error: ${err}`
        })
    }
}


module.exports = register;