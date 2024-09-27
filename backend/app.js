const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Simple route to respond to GET requests
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Express App!</h1>');
});

// Example of another route
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello, this is your data!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
