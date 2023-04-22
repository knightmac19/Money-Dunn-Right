const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const incomeSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  source: {
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

const Income = mongoose.model('Income', incomeSchema);

module.exports = Income;
