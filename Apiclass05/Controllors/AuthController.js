const UsersModel = require('../Models/Users')
const bcrypt = require('bcrypt')

const signup = async (req,res)=> {
    try {
        const {name, email, password} = req.body;
        const user = await UsersModel.findOne({email})
        if(user)
        {
            res.status(400).json({
                message: "User is already exist, you can login",
                success: false
            })
        }

        const userModel = new UsersModel({name,email,password});
        userModel.password = bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201).json({
            message: 'signup successfully',
            success: true
        })

    } catch (err) {
        res.status(500).json({
            message: "Internal server error",
            success: false
        })
        
    }
}

module.exports = {
    signup
}