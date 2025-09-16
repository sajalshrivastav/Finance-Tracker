const mongoose = require('mongoose');
require('dotenv').config();


const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI).then(() => {
            console.log('Connected to MongoDB');
        })
    } catch (err) {
        console.error('Error connecting to MongoDB', err);
        process.exit(1);
    }
}


module.exports = { connectDB };

