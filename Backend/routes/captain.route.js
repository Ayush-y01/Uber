const express = require('express');
const captainController = require('../controllers/captain.controller.js');
const router = express.Router();
const { body } = require('express-validator');
const authMiddleware = require('../middlewares/auth.middleware.js')



router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at 3 character long'),
    body('password').isLength({min:6}).withMessage('password must be at least 6 char long'),
    body('vehicle.color').isLength({min:3}).withMessage('color must be at 3 char long'),
    body('vehicle.plate').isLength({min:4}).withMessage('plate must be at 4 least char lonhg '),
    body('vehicle.capacity').isLength({min:1}).withMessage('Capacity must be at 1 '),
    body('vehicle.vehicleType').isIn(['car','auto','bike']).withMessage('Invalid vehicle type')
],
    captainController.registerCaptain
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid email!!'),
    body('password').isLength({ min: 3 }).withMessage('password was Incorrect!!!')
],
    captainController.loginCaptain
)


router.post('/profile',authCaptain.authCaptain, captainController.getcaptainProfile)


module.exports = router;