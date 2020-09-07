const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CreditSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },

  dateCreated: {
    type: Date,
    default: Date.now
  },

  lastUpdated: {
    type: Date
  },

  CreditCardID: {
    type: String
  },

  amount: {
    type: Number,
    required: true
  },

}, { collection: "Credits" });


CreditSchema.methods.setLastUpdated = function() {
  this.lastUpdated = Date.now();
  return this.lastUpdated;
};


const Credit = mongoose.model('Credit', CreditSchema);

module.exports = Credit;