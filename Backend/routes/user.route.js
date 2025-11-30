const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const userController = require('../controllers/user.controller.js');


router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First Name Must be at least 3 Character long'),
    body('password').isLength({min: 3}).withMessage('password must be at least 6 character long')
],
    userController.registerUser
)


router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
     body('password').isLength({min: 3}).withMessage('password must be at least 6 character long')
],
    userController.loginUser
)




module.exports = router;