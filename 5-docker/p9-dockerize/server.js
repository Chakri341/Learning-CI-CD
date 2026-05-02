const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Docker App Running 🚀");
});

module.exports = app;