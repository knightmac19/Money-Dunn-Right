const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WithdrawalSchema = new Schema({
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

}, { collection: "Withdrawals" });


WithdrawalSchema.methods.setLastUpdated = function() {
  this.lastUpdated = Date.now();
  return this.lastUpdated;
};


const Withdrawal = mongoose.model('Withdrawal', WithdrawalSchema);

module.exports = Withdrawal;