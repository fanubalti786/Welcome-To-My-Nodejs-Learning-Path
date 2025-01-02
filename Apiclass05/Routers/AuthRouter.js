const { loginValidation, signupValidation } = require('../Middlewares/AuthWalidation');

const router = require('express').Router();

router.post('/signup', signupValidation);
router.post('/login', loginValidation);


module.exports = router;