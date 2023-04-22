const mongoose = require('mongoose');
const { default: isEmail } = require('validator/lib/isEmail');

const Schema = mongoose.Schema;

const expenseSchema = new Schema({
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
  user_id: {
    type: String,
    required: true
  },
  user_email: {
    type: String,
    required: true
  }

}, { timestamps: true });

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
