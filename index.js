// Import the necessary modules
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const colors = require('colors');
const morgan = require('morgan');
const connectDb = require('./config/connectDB');
const volunteerRoutes = require('./routes/volunteerRoutes');
const disasterRoutes = require('./routes/disasterRoutes');

// Configuring the environment variables
dotenv.config();

// Creating an instance of express
const app = express();

// Defining the port to be used
const PORT = process.env.PORT || 5000;

// Database connection
connectDb();

// Using the necessary dependencies
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//routes
// app.use('/', (req,res) =>{
//     res.send("Welcome to the Backend Server!");
// });

// User Authentication
app.use('/api/v1/users', require('./routes/userRoutes'));

// Volunteer Routes
app.use('/api/v1/volunteers', volunteerRoutes);

// Disaster Routes
app.use('/api/v1/disasters', disasterRoutes);


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Internal Server Error'
    });
});


// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.yellow.bold)
});


