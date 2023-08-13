const { Int32 } = require('mongodb');
const mongoose = require('mongoose');


// Define a schema for projects
const ProjInfoSchema = new mongoose.Schema({
  aspect: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  information: {
    type: String,
    required: true,
  },
});

// Create a model named "Project" based on the project schema
const ProjInfo = mongoose.model('ProjInfo', ProjInfoSchema);

module.exports = ProjInfo;
