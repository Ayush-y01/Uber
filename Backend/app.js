const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const cors =  require('cors');
const connectToDb = require('./DB/db.js')
const userRoutes = require('./routes/user.route.js');
const cookieParser = require('cookie-parser');
const captainRoutes = require('./routes/captain.route.js');


connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/',(req,res) => {
    res.send("hello world");
});
app.use('/users', userRoutes);
app.use('/captains', captainRoutes);

module.exports = app;