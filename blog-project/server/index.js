// server/index.js
const express = require("express");
const cors = require("cors");

const app = express();

const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/post");

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/api", authRoutes);
app.use("/api/posts", postRoutes);

// Base route
app.get("/", (req, res) => {
  res.send("Blog API is running...");
});

module.exports = app;
