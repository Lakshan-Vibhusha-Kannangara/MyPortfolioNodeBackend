const mongoose = require('mongoose');

// Define a schema for blog posts
const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  author: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  publishDate: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  images: [String],
  listItems: [String],
});

// Create a model named "BlogPost" based on the blog post schema
const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;
