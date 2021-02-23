const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.send("This one is going to fail lmao xd");
});

module.exports = app;
