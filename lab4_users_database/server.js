const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const PORT = 5000;

const app = express();

app.use(express.json());

connectDB();
app.use((req, res, next) => {
  console.log(`Incoming Request: ${req.method} ${req.url}`);
  next();
});

app.use("/api", userRoutes); 

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
