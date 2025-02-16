const mongoose = require("mongoose");
const User = require("./models/User");
const fs = require("fs");

const MONGO_URI = "mongodb+srv://admin:admin123@clustercomp3123.llert.mongodb.net/?retryWrites=true&w=majority&appName=Clustercomp3123";

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const users = JSON.parse(fs.readFileSync("UserData.json", "utf-8"));

const importData = async () => {
    try {
        await User.insertMany(users);
        console.log("User data imported successfully!");
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

importData();
