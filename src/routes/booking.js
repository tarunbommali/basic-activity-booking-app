const express = require("express");
const bookingRouter = express.Router();

const Booking = require("../models/booking");
const Activity = require("../models/activity");
const { userAuth } = require("../middleware/userAuth");
const booking = require("../models/booking");

bookingRouter.post("/:activityId", userAuth, async (req, res) => {
  const { activityId } = req.params;
  const { noOfTickets } = req.body;

  if (!noOfTickets || noOfTickets < 1 || noOfTickets > 6) {
    return res.status(400).json({ message: "Tickets must be between 1 and 6" });
  }

  try {
    const activity = await Activity.findById(activityId);
    if (!activity) {
      return res.status(404).json({ message: "Activity not found" });
    }

    const alreadyBooked = await Booking.findOne({
      user: req.user._id,
      activity: activityId,
    });

    if (alreadyBooked) {
      return res.status(400).json({ message: "Already booked this activity" });
    }

    const newBooking = new Booking({
      user: req.user._id,
      activity: activityId,
      noOfTickets,
    });

    await newBooking.save();
    res.status(201).json({ message: "Booking successful", booking: newBooking });
  } catch (error) {
    console.error("Booking error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// GET /bookings - Get all bookings for the logged-in user
bookingRouter.get("/", userAuth, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id }).populate("activity");

    res.status(200).json({
      message: "User bookings fetched successfully",
      bookings,
      noOfTickets
      
    });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});


// POST /bookings/:activityId → Book an activity
bookingRouter.post("/:activityId", userAuth, async (req, res) => {
  const { activityId } = req.params;

  try {
    const activity = await Activity.findById(activityId);

    if (!activity) {
      return res.status(404).json({ message: "Activity not found" });
    }

    // Check if already booked
    const alreadyBooked = await Booking.findOne({
      user: req.user._id,
      activity: activityId,
    });

    if (alreadyBooked) {
      return res.status(400).json({ message: "Already booked this activity" });
    }

    const newBooking = new Booking({
      user: req.user._id,
      activity: activityId,
    });

    await newBooking.save();

    res.status(201).json({ message: "Booking successful", booking: newBooking });
  } catch (error) {
    console.error("Booking error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});


module.exports = bookingRouter;
