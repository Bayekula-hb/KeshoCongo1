const express = require("express");

const app = express();
const cors = require("cors");

app.use((req, res) => {
    res.json({ message: 'Votre requête a bien été reçue !' }); 
 });

module.exports = app;