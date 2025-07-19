const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

let mongoConnected = false; // Track connection status

// MongoDB connection
mongoose
  .connect(process.env.mongoConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    mongoConnected = true;
    console.log("MongoDB connected");
  })
  .catch((err) => {
    mongoConnected = false;
    console.error("MongoDB connection error:", err);
  });

app.use(express.json());
app.use(cors());

app.use("/api", require("./routes/userRoutes"));
error404Handler();
handleErrors();

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

// Root route
app.get("/", (req, res) => {
  if (mongoConnected) {
    res.send("✅ App is running and MongoDB connection was successful");
  } else {
    res.status(500).send("❌ App is running, but MongoDB connection failed");
  }
});

function error404Handler() {
  app.use((req, res) => {
    res.status(404).json({
      message: "Not Found",
      status_code: 404,
    });
  });
}

function handleErrors() {
  app.use((error, req, res, next) => {
    const errorStatus = req.errorStatus || 500;
    res.status(errorStatus).json({
      message: error.msg || "Something went wrong. Please try again!",
      status_code: errorStatus,
    });
  });
}
