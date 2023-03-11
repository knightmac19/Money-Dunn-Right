const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  account: {
    type: String,
    required: true
  },

}, { timestamps: true });

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;

