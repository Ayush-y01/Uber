const express  = require('express');
const router = express.Router();
const { body,query } = require('express-validator') 
const rideController = require('../controllers/ride.controller')
const authMiddleware = require('../middlewares/auth.middleware.js')



router.post('/create',
    authMiddleware.authUser,
    body('pickup').isString().isLength({ min:3 }).withMessage('Invalid pick up location'),
    body('destination').isString().isLength({ min:3 }).withMessage('Invalid destination'),
    body('vehicleType').isString().isIn(['auto','car','bike']).withMessage('invalid vehicle type'),
    rideController.createRide

)

router.get('/get-fare',
    authMiddleware.authUser,
    query('pickup').isString().isLength({ min:3 }).withMessage('invalid pickup location'),
    query('destination').isString().isLength({ min:3 }).withMessage('invalid destination'),
    rideController.getFare
)



module.exports = router;