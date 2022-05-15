const router = require('express').Router();
const {
  getYears,
  getSingleYear,
  createYear,
  updateYear,
  deleteYear
} = require('../../controllers/year-controller');

// /api/users
router.route('/').get(getYears).post(createYear);

// /api/users/:userId
router.route('/:yearId').get(getSingleYear).put(updateYear).delete(deleteYear);

module.exports = router;