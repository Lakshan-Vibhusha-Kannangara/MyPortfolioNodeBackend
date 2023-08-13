const mongoose = require('mongoose');

// Define a schema for projects
const MessageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  }
});

// Create a model named "Project" based on the project schema
const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;
