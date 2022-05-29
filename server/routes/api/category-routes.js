const router = require('express').Router();
const {
  getCategories,
  getSingleCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../../controllers/category-controller');

// /api/categories
router.route('/').get(getCategories).post(createCategory);

// /api/categories/:categoryId
router.route('/:categoryId')
  .get(getSingleCategory)
  .delete(deleteCategory);
  // .put(updateCategory)
  


module.exports = router;