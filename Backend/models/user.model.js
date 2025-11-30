const { mongoose } = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');




const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type:String,
            require: true,
            minilength:[3, 'First must be at least 3 character long'],
        },
        lastname: {
            type: String,
            minilength:[3, 'last must be at least 3 character long'],
        }
    },
    email: {
            type:String,
            require: true,
            unique: true,
            minilength:[5, 'Email must be at least 5 character long'],

    },
    password: {
            type:String,
            require: true,
            select: false,
    },
    socketId: {
        type: String,
    }
})

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
    return token;
}
userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;