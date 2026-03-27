require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

//Routes Import
const trailRoutes = require("./routes/trailRoutes");

//Routes
app.use("/api/trails", trailRoutes);

// Basic health check route
app.get("/", (req, res) => {
  res.send("Payana Trails API is running...");
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
