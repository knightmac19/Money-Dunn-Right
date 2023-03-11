const express = require('express');
// const Transaction = require('../models/TransactionModel');
const {
  createTransaction,
  getTransactions,
  getSingleTransaction,
  deleteTransaction,
  updateTransaction
} = require('../controllers/transactionController');

const router = express.Router();

// GET all transactions
router.get('/', getTransactions);

// GET a single transaction
router.get('/:id', getSingleTransaction);

// POST a new transaction
router.post('/', createTransaction);

// DELETE a single transaction
router.delete('/:id', deleteTransaction);

// UPDATE a single transaction
router.patch('/:id', updateTransaction);

module.exports = router;