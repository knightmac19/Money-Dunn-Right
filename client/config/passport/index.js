const passport = require('passport');
const User = require('../../../models/User');
const strategies = require('./strategies/strategies');

passport.serializeUser(function (user, done) {
  done(null, user.email);
});

passport.deserializeUser(function (email, done) {
  User.findOne({ email })
    .exec((err, user) => {
      done(err, user);
    });
});

passport.use('local-signin', strategies.loginStrategy);
passport.use('local-signup', strategies.signupStrategy);

module.exports = passport;