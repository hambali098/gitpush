const express = require('express');
const cors = require('cors');

const app = express();
const port = 4005;

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({
    message: 'Server running on port 4005'
  });
});

// Start server
app.listen(port, () => {
  console.log(`⚡️[server]: Server running at http://localhost:${port}`);
});