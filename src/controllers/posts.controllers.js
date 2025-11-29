// src/controllers/posts.controller.js

// Existing exports here...
// e.g., const getAllPosts = ...

// NEW CONTROLLER
exports.getPostById = async (req, res) => {
  try {
    const postId = req.params.postId;

    return res.json({
      message: `Fetching data for post with ID: ${postId}`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Something went wrong",
    });
  }
};