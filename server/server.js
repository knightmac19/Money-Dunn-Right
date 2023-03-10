require('dotenv').config();

const PORT = process.env.PORT;

const express = require('express');
const mongoose = require('mongoose');
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

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}!!`);
    });
  })
  .catch((err) => {
    console.log(err);
  });


