const mongoose = require('mongoose');

// Define a schema for courses
const courseSchema = new mongoose.Schema({
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
  lastupdated:{
    type:String,
    required:true
  }
});

// Create a model named "Course" based on the course schema
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
