require('dotenv').config();

const PORT = process.env.PORT;

const express = require('express');

// express app
const app = express();

app.get('/', (req, res) => {
  res.json({mssg: 'Welcome to the app'})
});

// list for requests
app.listen(PORT, () => {
  console.log('listening on port 3000!!');
});
