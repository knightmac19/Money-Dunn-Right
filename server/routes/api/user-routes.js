const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addMutualPartners,
  removeMutualPartners
} = require('../../controllers/user-controller');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/partners/partnerId
router.route('/:userId/partners/:partnerId').post(addMutualPartners).delete(removeMutualPartners);

module.exports = router;