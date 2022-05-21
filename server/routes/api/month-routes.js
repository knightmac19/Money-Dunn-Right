const router = require('express').Router();
const {
  getMonths,
  getSingleMonth,
  createMonth,
  updateMonth,
  deleteMonth,
} = require('../../controllers/month-controller');

// /api/months
router.route('/').get(getMonths).post(createMonth);

// /api/months/:monthId
router.route('/:monthId').get(getSingleMonth).put(updateMonth).delete(deleteMonth);

// /api/months/:monthId/oldOwner/:ownerId
// router.route('/:monthId/oldOwner/:ownerId').put(updateMonthOwner)



module.exports = router;