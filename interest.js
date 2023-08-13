const mongoose = require('mongoose');


// Define a schema for projects
const InterestsSchema = new mongoose.Schema({
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
});

// Create a model named "Project" based on the project schema
const Interests = mongoose.model('Interests', InterestsSchema);

module.exports = Interests;
