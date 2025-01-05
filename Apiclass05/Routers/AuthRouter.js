const { loginValidation, signupValidation } = require('../Middlewares/AuthWalidation');
const controllers = require("../Controllors/AuthControllors")
const router = require('express').Router();

router.post('/signup', signupValidation,controllers.signup);
router.post('/login', loginValidation,controllers.login);


module.exports = router;