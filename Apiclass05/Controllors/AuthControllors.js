const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config()
const UsersModel = require('../Models/Users');

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        // Check if the user already exists
        const user = await UsersModel.findOne({ email });
        if (user) {
            return res.status(400).json({
                message: "User already exists, you can log in",
                success: false,
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance
        const userModel = new UsersModel({ name, email, password: hashedPassword });

        // Save the new user
        await userModel.save();

        res.status(201).json({
            message: 'Signup successful',
            success: true,
        });
    } catch (err) {
        console.error(err); // Log the error for debugging purposes
        res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};




const login = async (req, res) => {
    try {
        const {email, password } = req.body;
        const errorMsg = "Auth failed email and password is wrong";
        
        // Check if the user not exists
        const user = await UsersModel.findOne({ email });
        if (!user) {
            return res.status(402).json({
                message: errorMsg,
                success: false,
            });
        }

        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(402).json({
                message: errorMsg,
                success: false,
            });
        }

        const jwToken = await jwt.sign(
            {email: user.email, _id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: '24h'}
        )

        res.status(200).json({
            message: 'login successful',
            success: true,
            jwToken,
            email,
            name: user.name
        });

        
    } catch (err) {
        console.error(err); // Log the error for debugging purposes
        res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};

module.exports = {
    signup,
    login
};

