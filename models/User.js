const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * * * * * User Schema * * * * *
 * Mongoose model for the User collection in mongoDB.
 * firstName: A user's first name
 * lastName: A user's last name
 * email: A user's email, used to login/authenticate, contains a regex email verifier.
 * dateCreated: The date/time a user was created.
 * fullName: A user's full name (firstName + lastName).
 * lastUpdated: The last date/time this user was updated.
 * setFullName(): used to mutate the fullName property.
 * setLastUpdated(): used to set the lastUpdated property.
 */

const UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: true
  },

  lastName: {
    type: String,
    trim: true,
    required: true
  },

  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: email => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      },
      message: "Please enter a valid email"
    },
    required: [true, "Email required"]
  },

  password: {
    type: String,
    required: true,
    trim: true
  },

  dateCreated: {
    type: Date,
    default: Date.now
  },

  fullName: {
    type: String
  },

  lastUpdated: {
    type: Date
  }
});

UserSchema.methods.setFullName = function() {
  this.fullName = `${this.firstName} ${this.lastName}`;
  return this.fullName;
};

UserSchema.methods.setLastUpdated = function() {
  this.lastUpdated = Date.now();
  return this.lastUpdated;
};

const User = mongoose.model('User', UserSchema);

module.exports = User;