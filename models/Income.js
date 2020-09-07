const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IncomeSchema = new Schema({
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

  totalIncome: {
    type: Number,
    required: true,
  },

  deposits: [
    {
      type: Schema.Types.ObjectId,
      ref: "Paycheck"
    }
  ]

}, { collection: "Incomes" });



IncomeSchema.methods.setLastUpdated = function() {
  this.lastUpdated = Date.now();
  return this.lastUpdated;
};

IncomeSchema.methods.setTotalIncome = function() {
  // this.totalIncome = sum(deposits)
  return this.totalIncome;
};



const Income = mongoose.model('Income', IncomeSchema);

module.exports = Income;