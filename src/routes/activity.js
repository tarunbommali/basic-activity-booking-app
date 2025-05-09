const express = require("express");
const activityRouter = express.Router();
const Activity = require("../models/activity");

// GET /activities - Public route to get all activities
activityRouter.get("/", async (req, res) => {
  try {
    const activities = await Activity.find();
    res.status(200).json({ activities });
  } catch (error) {
    console.error("Error fetching activities:", error);
    res.status(500).json({ message: "Error fetching activities" });
  }
});

// POST /activities - Add a new activity (Public or Protected as needed)
activityRouter.post("/", async (req, res) => {
  const { title, description, location, date, time } = req.body;

  if (!title || !description || !location || !date || !time) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newActivity = new Activity({
      title,
      description,
      location,
      date,
      time,
    });

    await newActivity.save();

    res.status(201).json({ message: "Activity created successfully", activity: newActivity });
  } catch (error) {
    console.error("Error creating activity:", error);
    res.status(500).json({ message: "Error creating activity", error: error.message });
  }
});

module.exports = activityRouter;
