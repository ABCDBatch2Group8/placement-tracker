const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const  cors = require('cors');

// Middleware
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.use(cors());

// Import Routes
const employerRoute = require('./routes/employer')

app.use('/employer/',employerRoute)

// Connect to db
mongoose.connect(process.env.dbUrl, {useNewUrlParser: true}, () =>
    console.log('Connected to DB!')
);
// Server
app.listen(5000);