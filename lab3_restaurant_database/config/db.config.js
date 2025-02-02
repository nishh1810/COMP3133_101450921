const mongoose = require('mongoose');

const MONGO_URI = "mongodb+srv://nishitasachdev95:Admin%401121@cluster0.ft341.mongodb.net/";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connected...");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
