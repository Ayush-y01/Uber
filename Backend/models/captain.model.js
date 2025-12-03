const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const captainSchema = new mongoose.Schema({
    fullname:{
        firstname: {
            type: String,
            require: true,
            minLength: [3,'Firstname must be at 3 character long']
        },
        lasttname: {
            type: String,
            minLength: [3,'lastname must be at 3 character long']
        },
    },
    email:{
        type:String,
        require:true,
        unique:true,
        lowercase:true,
        match:[/^\S+@\S+\.\S+$/,'please enter a valid email']
    },
    password:{
        type:String,
        require:true,
        select:false,
    },
    sockedId:{
        type:String,
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive',
    },
    vehicle:{
        color:{
            type:String,
            require:true,
            minLength: [3,'color must be at 3 character long']
        },
        palte:{
            type:String,
            require:true,
            minLength: [4,'number plate must be at 3 character long']
        },
        capacity:{
            type:Number,
            require:true,
            minLength: [1,'capcity must be at 3 character long']
        },
        vehicleType:{
            type:String,
            require:true,
            enum:['car','auto','bike']
        }
    },
    location:{
        lat:{
            type:Number,
        },
        lng:{
            type:Number,
        }
    }
})


captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'})
    return token;
}

captainSchema.methods.comparePassword = async function () {
    return await bcrypt.compare(password,this.password);
}

captainSchema.methods.hashPassword = async function () {
    return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('captain',captainSchema);

module.exports = captainModel;