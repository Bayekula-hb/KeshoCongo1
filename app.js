const express = require("express");
const sequelize = require("./models/index");
const app = express();
const cors = require("cors");

(async()=>{try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}})()
app.use((req, res) => {
  res.json({ message: "Votre requête a bien été reçue !" });
});

module.exports = app;
