// index.js

const express = require('express');
const app = express();

app.use(express.json());

// Import router
const postsRouter = require('./routes/routes.posts');

// Use the router with correct API prefix
app.use('/api/v1/posts', postsRouter);
app.get("/", (req, res) => {
  res.send("Welcome to Blogify API!");
});


// Server
const PORT = 3000;
const HOST = "127.0.0.1"; // localhost

app.listen(PORT, HOST, () => {
 console.log(`Server running at http://${HOST}:${PORT}`);
});
module.exports = app;