
# Basic Activity Booking App

## Features
- User Authentication (Login/Signup) with **JWT** and **bcrypt**.
- MongoDB integration to store booking data.
- Input validation using **validator**.
- Cookie handling with **cookie-parser**.
- API routes to handle activity bookings.

## Technologies
- **Node.js**: JavaScript runtime used to build the backend.
- **Express.js**: Web framework for handling routes and HTTP requests.
- **MongoDB**: NoSQL database to store data.
- **JWT**: For generating and verifying user tokens.
- **bcrypt**: For hashing user passwords.
- **Validator**: For validating user inputs.
- **cookie-parser**: For parsing cookies.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/basic-activity-booking-app.git
   cd basic-activity-booking-app
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the environment variables:
   Create a `.env` file in the root directory of the project with the following content:

   ```bash
   MONGO_URI=<your_mongo_database_connection_string>
   JWT_SECRET=<your_jwt_secret_key>
   ```

4. Run the application in development mode:

   ```bash
   npm run dev
   ```

   Or start the application in production mode:

   ```bash
   npm start
   ```

## Endpoints

### POST /api/auth/signup

* Registers a new user.
* **Request Body**:

  ```json
  {
    "username": "user",
    "email": "user@example.com",
    "password": "password123"
  }
  ```
* **Response**:

  * 201 - User created successfully.
  * 400 - Bad Request (Invalid inputs).

### POST /api/auth/login

* Authenticates a user and returns a JWT.
* **Request Body**:

  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
* **Response**:

  * 200 - Login successful with JWT.
  * 400 - Bad Request (Invalid credentials).

### GET /api/activities

* Fetches a list of available activities.
* **Response**:

  * 200 - Returns a list of activities.
  * 500 - Internal Server Error.

### POST /api/booking

* Books an activity.
* **Request Body**:

  ```json
  {
    "activityId": "12345",
    "userId": "user123",
    "bookingDate": "2025-05-10"
  }
  ```
* **Response**:

  * 201 - Booking successful.
  * 400 - Bad Request (Invalid input).

## Scripts

* **dev**: Starts the app with `nodemon` in development mode.
* **start**: Starts the app in production mode.
* **test**: Placeholder for tests (No tests specified).


## Author

Tarun Bommali

## Acknowledgments

* [Node.js](https://nodejs.org/) for the runtime environment.
* [Express.js](https://expressjs.com/) for the web framework.
* [MongoDB](https://www.mongodb.com/) for the database.
* [JWT](https://jwt.io/) for user authentication.


```
Make sure to replace placeholders like `your_mongo_database_connection_string` and `your_jwt_secret_key` with actual values when setting up.
```
