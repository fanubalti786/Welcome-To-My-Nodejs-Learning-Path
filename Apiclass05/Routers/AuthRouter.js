const { signup } = require('../Controllors/AuthController');
const { loginValidation, signupValidation } = require('../Middlewares/AuthWalidation');

const router = require('express').Router();

router.post('/signup', signupValidation, signup);
router.post('/login', loginValidation);


module.exports = router;