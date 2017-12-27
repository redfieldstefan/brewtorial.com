"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');

const Recipe = Schema({
  basic: {
    name: String,
    description: String,
    style: String
  },
  equipment: Array,
  ingredients: Array,
  instructions: Array,
  url: String
});

module.exports = mongoose.model("Recipe", Recipe);
