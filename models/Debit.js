const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DebitSchema = new Schema({
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

}, { collection: 'Debits' });


DebitSchema.methods.setLastUpdated = function() {
  this.lastUpdated = Date.now();
  return this.lastUpdated;
};


const Debit = mongoose.model('Debit', DebitSchema);

module.exports = Debit;