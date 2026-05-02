const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(process.env.SECRET_MESSAGE || "Default message");
});

module.exports = app;