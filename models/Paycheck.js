const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaycheckSchema = new Schema({
  dateCreated: {
    type: Date,
    default: Date.now
  },

  lastUpdated: {
    type: Date
  },

  IncomeID: {
    type: String
  },

  amount: {
    type: Number,
    required: true
  },

  source: {
    type: String,
    required: true
  },

  earnedBy: {
    type: String,
    required: true
  },

  note: {
    type: String
  },

  addedTo: [
    {
      type: Schema.Types.ObjectId,
      ref: "BankAccount"
    },
    {
      type: Schema.Types.ObjectId,
      ref: "Currency"
    }
  ],

}, { collection: "Paychecks" });


PaycheckSchema.methods.setLastUpdated = function() {
  this.lastUpdated = Date.now();
  return this.lastUpdated;
};


const Paycheck = mongoose.model('Paycheck', PaycheckSchema);

module.exports = Paycheck;