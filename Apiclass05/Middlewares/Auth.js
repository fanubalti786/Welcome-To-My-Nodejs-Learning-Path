const jwt = require('jsonwebtoken')
require('dotenv').config()

const ensureAuthenticated = (req,res,next)=>
{
    const auth = req.headers['authorization'];
    console.log(auth)
    if(!auth)
    {
        return res.status(403).json({
            message: "Unauthorized, jwt token is required!",
            success: false
        });
        
    }

    try {
        const decoded = jwt.verify(auth, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({
            message: "Unauthorized, jwt token is require",
            success: false
        });
    }
}

module.exports = ensureAuthenticated;