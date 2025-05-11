const express = require("express");
const app = express();
const connectDB = require("../src/config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(cookieParser());
app.use(express.json());


const BACKEND_URL = "https://basic-activity-booking-app-theta.vercel.app/"
const PORT = process.env.PORT || 3000;

const authRouter = require("../src/routes/auth")
const activityRouter = require("../src/routes/activity")
const bookingRouter = require("../src/routes/booking")


// Middleware to set CORS headers
let corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://basic-activity-booking-app.netlify.app",
    "https://basic-activity-booking-app-02p3.onrender.com",
    "https://basic-activity-booking-app-theta.vercel.app/"
  ],
  credentials: true, // allow cookies if you're using them
};


app.use(cors(corsOptions));
app.use("/",authRouter)
app.use("/",activityRouter)
app.use("/booking",bookingRouter)

// Connect to MongoDB and then start the server
connectDB()
  .then(() => {
    console.log("MongoDB connection established successfully");
    app.listen(PORT, () => {
      console.log("Server running on http://localhost:3000");
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
  });
