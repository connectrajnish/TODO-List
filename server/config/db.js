const mongoose = require('mongoose');

const db = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017';

const connectDB = async () => {
    try {
        await mongoose.connect(db);
        console.log("Connected to Database :: MongoDB");
    } catch (err) {
        console.error("Error in connecting to DB: ", err);
    }
}

module.exports = connectDB;
