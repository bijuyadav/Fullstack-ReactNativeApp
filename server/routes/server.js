const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const connectDB = require('../config/db')


//dotENV
dotenv.config();

//mongodb connection

connectDB();


// rest object

const app = express();

// middlewares 

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes

app.get('', (req,res) => {
    res.status(200).json({
        success:true,
        message:"Welcome to Our Basic App"
    });
});

// port

const PORT = process.env.PORT || 8080;

// Listen
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.bgGreen);
});
