require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");
const app = express();
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//Routes Import
const trailRoutes = require("./routes/trailRoutes");
const adminRoutes = require("./routes/adminRoutes");
const destinationRoutes = require("./routes/destinationRoutes");

//Routes
app.use("/api/admin", adminRoutes);
app.use("/api/trails", trailRoutes);
app.use("/api/destinations", destinationRoutes);

// Basic health check route
app.get("/", (req, res) => {
  res.send("Payana Trails API is running...");
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
