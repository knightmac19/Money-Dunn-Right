const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * * * * * Budget Schema * * * * *
 * Mongoose model for the budget collection in mongoDB.
 * title: A budget's title 
 * dateCreated: The date/time a budget was created.
 * UserID: A reference to the budget's assigned user.
 * lastUpdated: The last date/time this budget was updated.
 * categories: an array of categoryID's to reference categories in the DB
 * setLastUpdated(): used to set the lastUpdated property.
*/

const BudgetSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },

  dateCreated: {
    type: Date,
    default: Date.now
  },

  UserID: {
    type: String
  },

  lastUpdated: {
    type: Date
  },

  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Category'
    }
  ],

  bankAccounts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'BankAccount'
    }
  ],

  creditCards: [
    {
      type: Schema.Types.ObjectId,
      ref: 'CreditCard'
    }
  ],

  netWorth: {
    type: Number
  },

  currencies: [
    // convert all currencies to US dollar
    {
      type: Schema.Types.ObjectId,
      ref: 'Currency'
    }
  ],

  totalCash: {
    type: Number
  },

  income: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Income'
    }
  ]
});

BudgetSchema.methods.setLastUpdated = function() {
  this.lastUpdated = Date.now();
  return this.lastUpdated;
};

BudgetSchema.methods.setTotalCash = function(currencies) {
  // sum total value of each currency to total value of all other currencies
    // this.totalCash = 
    // return this.totalCash;
};

BudgetSchema.methods.setNetWorth = function(bankAccounts, totalCash, creditCards) {
  // 
    // this.netWorth = bankAccounts + totalCash - creditCards
    // return this.netWorth;
};

const Budget = mongoose.model("Budget", BudgetSchema);

module.exports = Budget;
