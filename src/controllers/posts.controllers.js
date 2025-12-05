// src/controllers/posts.controller.js

// Get ALL posts
exports.getAllPosts = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      data: {
        message: "All posts fetched successfully"
      }
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      error: {
        message: "Something went wrong"
      }
    });
  }
};

// Get post by ID
exports.getPostById = async (req, res) => {
  try {
    const postId = req.params.postId;

    return res.status(200).json({
      success: true,
      data: {
        postId: postId
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: {
        message: "Something went wrong"
      }
    });
  }
};
