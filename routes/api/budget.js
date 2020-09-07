const router = require('express').Router();
const budgetController = require('../../controllers/budgetController');

// Matches with '/api/budget'
router
  .route('/')
  .get(budgetController.findAll)
  .post(budgetController.create)
  .delete(budgetController.delete);

// Matches with '/api/budget/:id'
router
  .route('/:id')
  .get(budgetController.findById)
  .put(budgetController.update)

  module.exports = router;