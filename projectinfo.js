const mongoose = require('mongoose');

// Define the schema for your project information
const projectInfoSchema = new mongoose.Schema({
  imageUrl: String,
  altText: String,
  description: String,
  text: String,
});

// Create the ProjectInfoModel based on the schema
const ProjectInfoModel = mongoose.model('ProjectInfo', projectInfoSchema);

module.exports = ProjectInfoModel;
