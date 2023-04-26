const express = require('express');

// controller functions
const { 
  signupUser, 
  loginUser, 
  getAllUsers,
  addPeer
} = require('../controllers/userController');

const router = express.Router();

// login route
router.post('/login', loginUser);

// signup route
router.post('/signup', signupUser);

// see all users
router.get('/', getAllUsers);

// add a peer
router.get('/peer', addPeer);

// DELETE a single Income
// router.delete('/:id', deleteUser);

module.exports = router;