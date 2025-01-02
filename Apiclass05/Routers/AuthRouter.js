require('../Controllors/AuthControllors');
const { loginValidation, signupValidation } = require('../Middlewares/AuthWalidation');

const router = require('express').Router();

router.post('/signup', signupValidation,userin);
router.post('/login', loginValidation);


module.exports = router;