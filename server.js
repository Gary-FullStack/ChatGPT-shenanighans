const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB (replace 'mongodb://localhost:27017/yourdb' with your MongoDB connection string)
mongoose
  .connect("mongodb://localhost:27017/yourdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// Define routes here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
