const db = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;

/**
 * * * * * * * User Controller * * * * * * *
 * User Controller responsible for handling axios requests to the server.
 * findAll: returns all users in collection, sorted by lastUpdated.
 * findOne: finds user by email.
 * create: creates new new User as db.User.
 * update: finds user and updates.
 * remove: finds user and deletes.
 */
module.exports = {

  findOne: (req, res) => {
    db.User.findOne({ email: req.body.email })
      .then(user => {

        if (!user) return res.status(400).json({ msg: "User does not exist." });

        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (err) {
            throw err;
          }
          if (!result) {
            res.status(401).json({ message: "Passwords did not match." });
            return;
          }
          res.json(user);
        });
      })
      .catch(err => res.status(422).json(err));
  },

  findAll: (req, res) => {
    db.User.find(req.query)
      .populate('budgets')
      .sort({ dateCreated: -1 })
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.status(422).json(err);
      });
  },

  findById: (req, res) => {
    db.User.findById(req.params.id)
      .populate('budgets')
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.status(422).json(err);
      });
  },

  create: (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
      if (err) {
        console.log(err);
      } else {
        req.body.password = hash;
        const user = new db.User(req.body);
        user.setFullName();
        user.setLastUpdated();

        db.User.create(user)
          .then(dbUser => {
            res.json(dbUser);
          })
          .catch(err => {
            res.status(422).json(err);
          });
      }
    });
  },

  update: (req, res) => {
    db.User.findOneAndUpdate(
      req.params.id,
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        fullName: req.body.firstName + " " + req.body.lastName,
        lastUpdated: Date.now()
      },
      {
        new: true
      }
    )
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => res.status(422).json(err));
  },

  // delete: (req, res) => {
  //   let message = `User ${req.body.id.TeacherID} destroyed`;

  //   db.User.findByIdAndDelete(req.body.id.TeacherID)
  //     .then(removeStudents => {
  //       db.Student.deleteMany({ _id: { $in: removeStudents.students } }).then(
  //         result => {
  //           console.log(message);
  //           res.json(result);
  //         }
  //       );
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }
};