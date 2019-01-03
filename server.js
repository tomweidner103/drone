const express = require("express");
const path = require("path");
const app = express();
const volleyball = require("volleyball");

app.use(express.json());

app.use(volleyball);

app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});

module.exports = app;
