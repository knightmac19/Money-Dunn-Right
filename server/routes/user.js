const express = require('express');

// controller functions
const { 
  signupUser, 
  loginUser, 
  getAllUsers 
} = require('../controllers/userController');

const router = express.Router();

// login route
router.post('/login', loginUser);

// signup route
router.post('/signup', signupUser);

// see all users
router.get('/', getAllUsers);

// DELETE a single Income
// router.delete('/:id', deleteUser);

module.exports = router;