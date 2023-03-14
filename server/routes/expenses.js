const express = require('express');
const {
  createExpense,
  getExpenses,
  getSingleExpense,
  deleteExpense,
  updateExpense
} = require('../controllers/expenseController');

const router = express.Router();

// GET all expenses
router.get('/', getExpenses);

// GET a single expense
router.get('/:id', getSingleExpense);

// POST a new expense
router.post('/', createExpense);

// DELETE a single expense
router.delete('/:id', deleteExpense);

// UPDATE a single expense
router.patch('/:id', updateExpense);

module.exports = router;