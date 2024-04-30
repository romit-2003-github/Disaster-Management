const mongoose = require('mongoose');
const colors = require('colors');

const connectDb = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
    }
    catch(err){
        console.log(`${err}`.bgRed.yellow.bold);
    }
};

module.exports = connectDb;


