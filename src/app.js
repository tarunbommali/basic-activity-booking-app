const express = require("express");
const app = express();
const connectDB = require("../src/config/database");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.json());

const authRouter = require("../src/routes/auth")
const activityRouter = require("../src/routes/activity")
const bookingRouter = require("../src/routes/booking")

app.use("/",authRouter)
app.use("/",activityRouter)
app.use("/booking",bookingRouter)

// Connect to MongoDB and then start the server
connectDB()
  .then(() => {
    console.log("MongoDB connection established successfully");
    app.listen(3000, () => {
      console.log("Server running on http://localhost:3000");
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
  });
