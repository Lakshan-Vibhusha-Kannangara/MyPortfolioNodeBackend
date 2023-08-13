const mongoose = require('mongoose');


// Define a schema for projects
const TechnicalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  information: {
    type: String,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
});

// Create a model named "Project" based on the project schema
const Technical = mongoose.model('Technical', TechnicalSchema);

module.exports = Technical;
