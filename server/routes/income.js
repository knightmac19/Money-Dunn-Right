const express = require('express');
const {
  createIncome,
  getIncomes,
  getSingleIncome,
  deleteIncome,
  updateIncome
} = require('../controllers/incomeController');
const Auth = require('../middleware/Auth')

const router = express.Router();

// require auth middleware for all routes
router.use(Auth)

// GET all Income
router.get('/', getIncomes);

// GET a single Income
router.get('/:id', getSingleIncome);

// POST a new Income
router.post('/', createIncome);

// DELETE a single Income
router.delete('/:id', deleteIncome);

// UPDATE a single Income
router.patch('/:id', updateIncome);

module.exports = router;