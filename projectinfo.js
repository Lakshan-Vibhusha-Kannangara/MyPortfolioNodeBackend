const mongoose = require('mongoose');

// Define the schema for your project information
const projectInfoSchema = new mongoose.Schema({
  projectNo: { type: Number, required: true }, // Add the projectNo field as required
  imageUrls: [{ type: String}], // Use square brackets to define an array of strings
  altText: { type: String },
  description: [{ type: String}],
  text: [{ type: String }],
  github:{type:String},
  content:{type:String},
  video:{type:String}
});

// Create the ProjectInfoModel based on the schema
const ProjectInfoModel = mongoose.model('ProjectInfo', projectInfoSchema);

module.exports = ProjectInfoModel;



