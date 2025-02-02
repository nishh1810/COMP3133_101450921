const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.config');
const restaurantRoutes = require('./routes/restaurant.routes');

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/', restaurantRoutes);

const PORT = 3000; 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
