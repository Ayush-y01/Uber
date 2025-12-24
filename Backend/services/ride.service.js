const rideModel = require('../models/ride.model.js');
const mapsService = require('./maps.service.js');
const crypto = require('crypto')


async function getFare(pickup, destination) {
    if (!pickup || !destination) {
        throw new Error('pickup and destination are required')
    }
    
    const distanceTime = await mapsService.getDistanceTime(pickup, destination);

    const baseFare = {
        auto: 30,
        car: 50,
        bike: 20
    };

    const perKmRate = {
        auto: 10,
        car: 15,
        bike: 8
    }
    const perMinuteRate = {
        auto: 2,
        car: 4,
        bike:1.5

    }
    const fare = {
        auto: baseFare.auto + ((distanceTime.distance.value / 1000) * perKmRate.auto) + ((distanceTime.duration.value / 60) * perMinuteRate.auto),
        car: baseFare.car + ((distanceTime.distance.value / 1000) * perKmRate.car) + ((distanceTime.duration.value / 60) * perMinuteRate.car),
        bike: baseFare.bike + ((distanceTime.distance.value / 1000) * perKmRate.bike) + ((distanceTime.duration.value / 60) * perMinuteRate.bike) 
    };
    return fare;
}

function getOtp(num) {
    function generateOtp(num) {
        const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num).toString()); // this part was where we stop at night 9:30 PM 23/12/2025 Tuesday
        return otp;
    }
    return generateOtp(num);
    
}



module.exports.createRide = async ({user, pickup, destination, vehicleType}) => {
    
    if (!user || !pickup || !destination || !vehicleType) {
        throw new Error('All Field are require');
    }

    const fare = await getFare(pickup, destination);

    const ride = rideModel.create({
        user,
        pickup,
        destination,
        otp: getOtp(4),
        fare: fare[ vehicleType ]
    })
    return ride;

}
