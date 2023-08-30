const mongoose = require('mongoose');

// Define the schema for your project information
const projectInfoSchema = new mongoose.Schema({
  projectNo: { type: Number, required: true }, // Add the projectNo field as required
  imageUrls: [{ type: String, required: true }], // Use square brackets to define an array of strings
  altText: { type: String, required: true },
  description: { type: String, required: true },
  text: { type: String, required: true },
});

// Create the ProjectInfoModel based on the schema
const ProjectInfoModel = mongoose.model('ProjectInfo', projectInfoSchema);

module.exports = ProjectInfoModel;
