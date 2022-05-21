const { User } = require("../models");

const userController = {
  // get all users
  getUsers(req, res) {
    User.find()
      .select("-__v")
      .then((dbUserData) => {
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // get single user by id
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: "No user with this id!" });
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => {
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // update a user
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      {
        $set: req.body,
      },
      {
        runValidators: true,
        new: true,
      }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: "No user with this id!" });
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: "No user with this id!" });
        }

        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // add a partner (another user) to this user's partner's array
  addMutualPartners(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId }, 
      { $addToSet: { partners: req.params.partnerId } },
      { new: true }
    )
    .then((dbUserData) => {
      if (!dbUserData) {
        return res.status(404).json({ message: 'No user with this id' });
      }
      return User.findOneAndUpdate(
        { _id: dbUserData.partners[dbUserData.partners.length - 1] }, 
        { $addToSet: { partners: dbUserData._id } },
        { new: true }
      );
    })
    .then((resData) => {
      if (!resData) {
        return res.status(404).json({ message: 'No partner with this id!' });
      }

      res.json(resData)
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  },

  // remove parter from a user's partner list
  async removeMutualPartners(req, res) {
     await User.findOneAndUpdate(
      { _id: req.params.partnerId }, 
      { $pull: { partners: req.params.userId } },
      { new: true }
    )

    await User.findOneAndUpdate(
      { _id: req.params.userId }, 
      { $pull: { partners: req.params.partnerId } },
      { new: true }
    )
    .then((dbUserData) => {
      if (!dbUserData) {
        return res.status(404).json({ message: 'No user with this id' });
      }
      res.json(dbUserData)
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  }
};

module.exports = userController;
