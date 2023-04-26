const User = require('../models/UserModel')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
  return jwt.sign( {_id}, process.env.SECRET, { expiresIn: '3d' });
}

// get all users
const getAllUsers = async (req, res) => {
  const users = await User.find({});

  res.status(200).json(users);
}



// login user
const loginUser = async (req, res) => {
  const { email, password} = req.body;

  try {
    const user = await User.login(email, password);

    // create token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup user
const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    // create token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
  
}

// delete user
// const deleteUser = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({error: 'No such user'});
//   }

//   const user = await User.findOneAndDelete({_id: id});

//   if (!user) {
//     return res.status(404).json({error: 'No such user'});
//   }

//   res.status(200).json(user);
// }

const addPeer = async (req, res) => {
  try {
    const userToAdd = await User.findOne({ email: req.body.peer_email})
  
    console.log(userToAdd);
    res.status(200).json(res)
  } catch (error) {
    res.status(400).json({error: error.message})
  }

  

  // const updatedUser = await User.findOneAndUpdate(
  //   { _id: req.params.userId },
  //   { $addToSet: {peers: }}
  // )


}

module.exports = { loginUser, signupUser, getAllUsers, addPeer }