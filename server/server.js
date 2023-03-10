require('dotenv').config();

const PORT = process.env.PORT;

const express = require('express');
const transactionRoutes = require('./routes/transactions');

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/api/transactions', transactionRoutes);

// list for requests
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!!`);
});
