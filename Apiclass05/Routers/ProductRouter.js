const ensureAuthenticated = require('../Middlewares/Auth');

const router = require('express').Router();


router.get('/', ensureAuthenticated ,(req,res)=>
{
    const data = [
        {
            name: "mobile",
            price: "100000"
        },
        {
            name: "tv",
            price: "200000"
        }
    ]
    res.status(200).json({
        success: true,
        data: data
    });
});

module.exports = router;