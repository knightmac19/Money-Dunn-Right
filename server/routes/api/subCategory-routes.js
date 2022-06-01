const router = require('express').Router();
const {
  getSubCategories,
  getSingleSubCategory,
  createSubCategory,
  updateSubCategory,
  deleteSubCategory,
} = require('../../controllers/subCategory-controller');

// /api/categories
router.route('/').get(getSubCategories).post(createSubCategory);

// /api/categories/:subCategoryId
router.route('/:subCategoryId')
  .get(getSingleSubCategory)
  .delete(deleteSubCategory)
  .put(updateSubCategory);
  




module.exports = router;