const express = require('express');
const Transaction = require('../models/TransactionModel');

const router = express.Router();

// GET all transactions
router.get('/', (req, res) => {
  res.json({
    mssg: 'GET all transactions'
  })
});

// GET a single transaction
router.get('/:id', (req, res) => {
  res.json({
    mssg: 'GET a single transaction'
  })
});

// POST a new transaction
router.post('/', async (req, res) => {
  const {date, amount, category, description, account} = req.body;

  try {
    const transaction = await Transaction.create({date, amount, category, description, account});
    res.status(200).json(transaction);
  } catch (err) {
    res.status(400).json({
      error: err.message
    })
  }

});

// DELETE a single transaction
router.delete('/:id', (req, res) => {
  res.json({
    mssg: 'DELETE a single transaction'
  })
});

// UPDATE a single transaction
router.patch('/:id', (req, res) => {
  res.json({
    mssg: 'UPDATE a single transaction'
  })
});

module.exports = router;