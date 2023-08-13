const mongoose = require('mongoose');


// Define a schema for projects
const InfoSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  field: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  university: {
    type: String,
    required: true,
  },
});

// Create a model named "Project" based on the project schema
const Info = mongoose.model('Information', InfoSchema);

module.exports = Info;



