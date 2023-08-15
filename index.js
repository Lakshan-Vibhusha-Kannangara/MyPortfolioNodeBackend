const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Project = require('./project'); 
const InterestModel = require('./interest');
const InfoModel = require('./info');
const TechnicalModel = require('./technical');
const ProjInfoModel = require('./infos');
const EssentialModel = require('./essentials');
const MessageModel = require('./message');
const TechnologyModel = require('./technology');
const CourseModel = require('./courses');
const BlogPost = require('./blogpost'); 

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const MONGODB_URL = "mongodb+srv://vibhooshakannangara:RNCDX9UkMZFlYWfY@cluster0.wc1kys6.mongodb.net/my_web_page";
mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Route for adding a project


app.get('/projects', async (req, res) => {
  try {
    // Find all projects
    const projects = await Project.find();
    res.json({ success: true, projects });
  } catch (error) {
    console.error("Error getting projects:", error);
    res.status(500).json({ success: false, error: "Failed to get projects" });
  }
});

// Route for getting all interests
app.get('/interests', async (req, res) => {
  try {
    // Find all interests in the database using the Interest model
    const interests = await InterestModel.find();
    res.json({ success: true, interests });
  } catch (error) {
    console.error("Error getting interests:", error);
    res.status(500).json({ success: false, error: "Failed to get interests" });
  }
});
app.get('/info', async (req, res) => {
  try {
    // Find all interests in the database using the Interest model
    const info = await InfoModel.find();
    res.json({ success: true, info });
  } catch (error) {
    console.error("Error getting interests:", error);
    res.status(500).json({ success: false, error: "Failed to get interests" });
  }
});

app.get('/technical', async (req, res) => {
  try {
    // Find all interests in the database using the Interest model
    const technical= await TechnicalModel.find();
    res.json({ success: true, technical });
  } catch (error) {
    console.error("Error getting interests:", error);
    res.status(500).json({ success: false, error: "Failed to get interests" });
  }
});

app.get('/technologies', async (req, res) => {
  try {
    // Find all interests in the database using the Interest model
    const technology= await TechnologyModel.find();
    res.json({ success: true, technology });
  } catch (error) {
    console.error("Error getting interests:", error);
    res.status(500).json({ success: false, error: "Failed to get interests" });
  }
});

app.get('/projinfo', async (req, res) => {
  try {
    // Find all project information in the database using the ProjInfoModel
    const projinfo = await ProjInfoModel.find();
    res.json({ success: true, projinfo });
  } catch (error) {
    console.error("Error getting project information:", error);
    res.status(500).json({ success: false, error: "Failed to get project information" });
  }
});

app.get('/essential', async (req, res) => {
  try {
    // Find all project information in the database using the ProjInfoModel
    const essential = await EssentialModel.find();
    res.json({ success: true, essential });
  } catch (error) {
    console.error("Error getting project information:", error);
    res.status(500).json({ success: false, error: "Failed to get project information" });
  }
});

app.get('/courses', async (req, res) => {
  try {
    // Find all project information in the database using the ProjInfoModel
    const course= await CourseModel.find();
    res.json({ success: true, course });
  } catch (error) {
    console.error("Error getting project information:", error);
    res.status(500).json({ success: false, error: "Failed to get project information" });
  }
});
app.get('/blog', async (req, res) => {
  try {
    // Find all blog posts in the database using the BlogPost model
    const blogPosts = await BlogPost.find();
    res.json({ success: true, blogPosts });
  } catch (error) {
    console.error("Error getting blog posts:", error);
    res.status(500).json({ success: false, error: "Failed to get blog posts" });
  }
});


app.post('/submit-message', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ success: false, error: "Message is required" });
    }

    // Create a new message using the MessageModel
    const newMessage = new MessageModel({
      message,
    });

    // Save the message to the database
    const savedMessage = await newMessage.save();

    // Log the saved message for debugging
    console.log("Saved message:", savedMessage);

    res.json({ success: true, message: savedMessage });
  } catch (error) {
    console.error("Error adding message:", error);
    res.status(500).json({ success: false, error: "Failed to add message" });
  }
});





app.listen(4002, () => {
  console.log("Server is running on port 4002");
});




