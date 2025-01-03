const {signup, login} = require('../Controllors/AuthControllors');

const { loginValidation, signupValidation } = require('../Middlewares/AuthWalidation');

const router = require('express').Router();

router.post('/signup', signupValidation, signup);
router.post('/login', loginValidation, login);


module.exports = router;