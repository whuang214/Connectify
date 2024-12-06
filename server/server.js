// Import dependencies
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// Set the port
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(morgan("dev")); // Log requests to the console

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Express server!" });
});

// Example API route
app.get("/api/example", (req, res) => {
  res.json({ message: "This is an example API route" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
