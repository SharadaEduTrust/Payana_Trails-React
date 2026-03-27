const express = require("express");
const router = express.Router();
const Trail = require("../models/Trail");

// GET all trails (Supports category filtering)
// Example: GET /api/trails?category=Wildlife
router.get("/", async (req, res) => {
  try {
    const { category } = req.query;

    // If category is provided and isn't "All", filter by it. Otherwise, return everything.
    const filter = category && category !== "All" ? { category } : {};

    const trails = await Trail.find(filter);
    res.json(trails);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server Error fetching trails", error: error.message });
  }
});

// POST a new trail (You can use this via Postman to add your initial data)
router.post("/", async (req, res) => {
  try {
    const newTrail = new Trail(req.body);
    const savedTrail = await newTrail.save();
    res.status(201).json(savedTrail);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to create trail", error: error.message });
  }
});

module.exports = router;
