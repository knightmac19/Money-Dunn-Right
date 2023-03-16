const express = require('express');
const {
  createIncome,
  getIncome,
  getSingleIncome,
  deleteIncome,
  updateIncome
} = require('../controllers/incomeController');

const router = express.Router();

// GET all Income
router.get('/', getIncome);

// GET a single Income
router.get('/:id', getSingleIncome);

// POST a new Income
router.post('/', createIncome);

// DELETE a single Income
router.delete('/:id', deleteIncome);

// UPDATE a single Income
router.patch('/:id', updateIncome);

module.exports = router;