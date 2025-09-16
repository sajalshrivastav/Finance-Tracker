const router = require('express').Router();
const { signup, login, getUserInfo } = require('../controllers/auth.controller');
const { loginValidation, signUpValidation, validateToken } = require('../Middleware/auth.middleware');


router.post('/login', loginValidation, login)

router.post('/signup', signUpValidation, signup)

router.get('/getUser', validateToken, getUserInfo)

module.exports = router;