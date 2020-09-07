const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CreditCardSchema = new Schema({
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

  charges: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Credit'
    },
    {
      type: Schema.Types.ObjectId,
      ref: 'Debit'
    }
  ],

  balance: {
    type: Number,
    required: true,
  },

  accountHolder: {
    type: String,
    trim: true,
    required: true
  },

}, { collection: "CreditCards" });


CreditCardSchema.methods.setLastUpdated = function() {
  this.lastUpdated = Date.now();
  return this.lastUpdated;
};

CreditCardSchema.methods.setBalance = function(charges) {
  // this.balance = sum(charges.credits, charges.debits)
  return this.balance;
};


const CreditCard = mongoose.model('CreditCard', CreditCardSchema);

module.exports = CreditCard;