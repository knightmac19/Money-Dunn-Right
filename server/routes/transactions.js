const express = require('express');
const Transaction = require('../models/TransactionModel');
const {
  createTransaction,
  getTransactions,
  getSingleTransaction
} = require('../controllers/transactionController');

const router = express.Router();

// GET all transactions
router.get('/', getTransactions);

// GET a single transaction
router.get('/:id', getSingleTransaction);

// POST a new transaction
router.post('/', createTransaction);

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