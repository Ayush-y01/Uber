const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const cors =  require('cors');
const connectToDb = require('./DB/db.js')
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.route.js');
const captainRoutes = require('./routes/captain.route.js');
const mapsRoutes = require('./routes/maps.route.js');
const rideRoutes = require('./routes/ride.route.js')

connectToDb();

app.use(cors({
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/',(req,res) => {
    res.send("hello world");
});
app.use('/users', userRoutes);
app.use('/captains', captainRoutes);
app.use('/maps', mapsRoutes);
app.use('/rides', rideRoutes);

module.exports = app;