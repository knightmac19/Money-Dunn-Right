const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CurrencySchema = new Schema({
  title: {
    type: String,
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

  valueInUSD: {
    type: Number
  },

}, { collection: "Currencies" });


CurrencySchema.methods.setLastUpdated = function() {
  this.lastUpdated = Date.now();
  return this.lastUpdated;
};

// CurrencySchema.methods.setValueInUSD = function() {
//   // this.valueInUSD = sum(denominations) --> set in USD
//   return this.valueInUSD;
// };


const Currency = mongoose.model('Currency', CurrencySchema);

module.exports = Currency;