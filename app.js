const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Simple route
app.get("/", (req, res) => {
  res.send("Hello from GitHub Actions Node App");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
