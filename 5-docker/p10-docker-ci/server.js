const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Docker CI App 🚀");
});

module.exports = app;