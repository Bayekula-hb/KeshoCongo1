const express = require("express");
const app = express();
const cors = require("cors");
const authRoutes = require("./routes/auth.route");
const sequelize = require("./utils/Dbconnect");

app.use(express.json())

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.get("/", (req, res) => {
  res.json({ message: "Votre requête a bien été reçue !" });
});

app.use("/auth", authRoutes);

module.exports = app;
