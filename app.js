const express = require("express");
const app = express();
const cors = require("cors");
const authRoutes = require("./routes/auth.route");

app.get("/", (req, res) => {
  res.json({ message: "Votre requête a bien été reçue !" });
});

app.use("/auth", authRoutes);

module.exports = app;
