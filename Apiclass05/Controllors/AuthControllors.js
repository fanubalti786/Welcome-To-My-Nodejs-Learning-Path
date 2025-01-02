const bcrypt = require('bcrypt');
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

module.exports = signup;

