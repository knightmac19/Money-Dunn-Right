const LocalStrategy = require('passport-local').Strategy;
const User = require('../../../../models/Teacher');
const bcrypt = require('bcryptjs');

/**
 * Passport JS is used to manage authentication and user login status.
 * This file creates two strategies to handle logins and logouts.
 * Login strategy: Logs a user in by quering database to ensure user exists and passwords match.
 * Logout strategy: Similiar to login, logout logs a user out and terminates their authenticated status.
 * Signup strategy: Similiar to above, this strategy is designed to handle inintal user signups.
 */

 const salt = bcrypt.genSaltSync(10);
 const strategies = {
  loginStrategy: new LocalStrategy(
    { usernameField: 'email' },
    function (email, password, done) {
      User.findOne({ email: email })
        .then(function (dbUser) {
          
          if (!dbUser) {
            return done(null, false, {
              message: 'No user found with that email.'
            });
          }

          else if (!dbUser.validPassword(password)) {
            return done(null, false, { 
              message: 'Incorrect Password.'
            });
          }

          return done(null, dbUser);

        });
    }
  ),
  
  logoutStrategy: new LocalStrategy(
    { usernameField: 'email' },
    function (
      email,
      password,
      done
    ) {
      User.findOne({ email })
        .exec((err, user) => {
          
          if (err) {
            return done(err, null);
          }
          
          if (!user) {
            return done("No user found ", null);
          }
          
          return done(null, user);

        });
    }
  ),

  signupStrategy: new LocalStrategy(
    { usernameField: 'email' },
    function (
      firstName,
      lastName,
      email,
      password,
      done
    ) {
      User.findOne({ email })
        .exec((err, user) => {
          if (err) {
            return done(err, null);
          }
          if (user) {
            return done("User already exists", null);
          }

          const encryptedPassword = bcrypt.hashSync(password, salt);
          let newUser = new User({
            firstName,
            lastName,
            email,
            password: encryptedPassword,
          });
          newUser.setFullName();
          newUser.setLastUpdated();

          newUser.save((err, inserted) => {
            if (err) {
              return done(err, null);
            }

            return done(null, inserted);
          });
        });
    }
  )
 }

 module.exports = strategies;