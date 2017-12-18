const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const endpoints = require("./endpoints");
const path = require("path");

const app = express();
const server = http.createServer(app);
const recipes = express.Router();
const port = process.env.PORT || 4000;

mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/brewtorial_store");


app.use(express.static(path.join(__dirname, "../build")));

require('./endpoints/recipes')(recipes);
app.use("/api", recipes);

server.listen(port, function() {
  console.log("lookin legit on port %d", port);
});

exports.port = port;