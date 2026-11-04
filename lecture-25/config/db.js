const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/CollegeDB').then(() => {
        console.log("Connected to MongoDB");
        }).catch((err) => {
            console.log("Error connecting to MongoDB", err);
        });
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
    }
}

module.exports = connectDB;