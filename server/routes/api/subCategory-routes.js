const router = require('express').Router();
const {
  getSubCategories,
  getSingleSubCategory,
  createSubCategory,
//   updateCategory,
  deleteSubCategory,
} = require('../../controllers/subCategory-controller');

// /api/categories
router.route('/').get(getSubCategories).post(createSubCategory);

// /api/categories/:subCategoryId
router.route('/:subCategoryId')
  .get(getSingleSubCategory)
  .delete(deleteSubCategory)
//   .put(updateCategory);
  




module.exports = router;