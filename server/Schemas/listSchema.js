const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  name: String,
  list: [Object],
});

module.exports = listSchema;
