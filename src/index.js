const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Blogify API is running!");
});

// NEW ROUTE
app.get("/api/v1/posts", (req, res) => {
  res.json({
    success: true,
    message: "All posts fetched successfully",
    posts: [],
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});