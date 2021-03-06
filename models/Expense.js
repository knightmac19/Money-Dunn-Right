const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({

  dateCreated: {
    type: Date,
    default: Date.now
  },

  lastUpdated: {
    type: Date
  },

  CategoryID: {
    type: String
  },

  amount: {
    type: Number,
    required: true,
  },

  spentBy: {
    type: String,
    required: true
  },

  location: {
    type: String
  },

  note: {
    type: String
  },

  paidWith: [
    {
      type: Schema.Types.ObjectId,
      ref: "BankAccount"
    },
    {
      type: Schema.Types.ObjectId,
      ref: "CreditCard"
    },
    {
      type: Schema.Types.ObjectId,
      ref: "Currency"
    }
  ]

  

}, { collection: "Expenses" });



ExpenseSchema.methods.setLastUpdated = function() {
  this.lastUpdated = Date.now();
  return this.lastUpdated;
};

ExpenseSchema.methods.setAmountToNegative = function() {
  this.amount = this.amount * -1;
  return this.amount;
};



const Expense = mongoose.model('Expense', ExpenseSchema);

module.exports = Expense;