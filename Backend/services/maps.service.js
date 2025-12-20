const axios = require('axios'); 


module.exports.getAddressCoordinate = async (address) => {
    const apikey = 'Google map api key';
    const url = `https://maps.googleapis.com/maps/api/getcode/json?
    address=${encodeURIComponent(address)}&key=${apikey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.address.location;
            return {
                ltd: location.lat,
                lng:location.lng,
            };
        }
        else {
            throw new error('Unable fetch coordinates')
        }
        
    } catch (error) {
        console.error(error);
        throw error
        
    }
}

module.exports.getDistanceTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error('origin and destination are require');
    }

    const apikey = process.env.GOOGLE_MAP_API;
    
    const url = `https://maps.googleapis.com/maps/api/ditancematrix/json?origin=${encodeURIComponent}`
    
    try {

        const response = await axios.get(url);
        if (response.data.status === "OK") {
            if (response.data.rows[ 0 ].elements[ 0 ].status === 'ZERO_RESULTS') {
                throw new Error('No route Found');

            } 
            return response.data.rows[0].elements[0];
            
        } else {
                throw new Error('Unable to fetch distance and time')
            }
        
    } catch (error) {
        console.error(error);
        throw error
        
    }
}


module.exports.getAuthCompleteSuggestions = async (input) => {
    if (!input) {
        throw new Error('address is require');
    }

    const apikey = process.env.GOOGLE_MAP_API;
    
    const url = `https://maps.googleapis.com/maps/api/ditancematrix/json?origin=${encodeURIComponent}`
    
    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            return response.data.predictions;
        }else {
            throw new Error('unable to fetch suggestion')
        }
        
    } catch (error) {
        console.error(error);
        throw error
    }
}