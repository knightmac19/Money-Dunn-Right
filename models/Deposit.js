const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DepositSchema = new Schema({
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

  BankAccountID: {
    type: String
  },

  amount: {
    type: Number,
    required: true
  },

}, { collection: "Deposits" });


DepositSchema.methods.setLastUpdated = function() {
  this.lastUpdated = Date.now();
  return this.lastUpdated;
};


const Deposit = mongoose.model('Deposit', DepositSchema);

module.exports = Deposit;