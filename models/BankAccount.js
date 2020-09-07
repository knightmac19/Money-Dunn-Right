const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BankAccountSchema = new Schema({
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

  BudgetID: {
    type: String
  },

  balance: {
    type: Number,
    required: true,
  },

  accountHolder: {
    type: String,
    trim: true,
    required: true
  },

  activity: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Deposit'
    },
    {
      type: Schema.Types.ObjectId,
      ref: 'Withdrawal'
    },
  ]

}, { collection: "BankAccounts" });


BankAccountSchema.methods.setLastUpdated = function() {
  this.lastUpdated = Date.now();
  return this.lastUpdated;
};

BankAccountSchema.methods.updateBalance = function() {
  // this.balance = activity.deposits - activity.withdrawals
  return this.balance;
};


const BankAccount = mongoose.model('BankAccount', BankAccountSchema);

module.exports = BankAccount;