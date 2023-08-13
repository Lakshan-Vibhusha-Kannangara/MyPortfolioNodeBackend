const mongoose = require('mongoose');


// Define a schema for projects
const TechnologySchema = new mongoose.Schema({
 
 name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },

});

// Create a model named "Project" based on the project schema
const Technology = mongoose.model('Technology', TechnologySchema);

module.exports = Technology;
