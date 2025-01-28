// create web server
// Import the Express library
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a route to handle requests to the root path '/'
app.get('/', (req, res) => {
  res.send('Hello from my web server!');
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});