// src/routes/posts.routes.js

const express = require("express");
const router = express.Router();
const postController = require("../controllers/posts.controllers");

// Make sure other static routes come first!
// Example: router.get("/", postController.getAllPosts);

// NEW DYNAMIC ROUTE
router.get("/:postId", postController.getPostById);

module.exports = router;