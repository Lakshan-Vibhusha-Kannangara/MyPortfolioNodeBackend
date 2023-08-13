const mongoose = require('mongoose');


// Define a schema for projects
const EssentialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    
  },
  information: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },about: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,

  },
  backgroundimg1: {
    type: String,
    required: true,
    
  },
  backgroundimg2: {
    type: String,
    required: true,
    
  },
});

// Create a model named "Project" based on the project schema
const Essential = mongoose.model('Essential', EssentialSchema);

module.exports = Essential;
