const rideModel = require('../models/ride.model.js');
const mapsService = require('./maps.service.js');

module.exports.createRide = async ({}) => {}


async function getFare(pickup, destination) {
    if (!pickup || !destination) {
        throw new Error('pickup and destination are required')
    }

    const distanceTime = await mapsService.getDistanceTime(pickup, destination)
}
