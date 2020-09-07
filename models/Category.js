const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
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

  alloted: {
    type: Number,
    required: true,
    default: 0
  },

  lastMonth: {
    type: Number,
  },

  spent: {
    type: Number,
  },

  toSpend: {
    type: Number,
  },

  expenses: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Expense'
    }
  ],
  
}, { collection: "Categories" });

CategorySchema.methods.setLastUpdated = function() {
  this.lastUpdated = Date.now();
  return this.lastUpdated;
};

CategorySchema.methods.setLastMonth = function() {
  // this.lastMonth = Date.now();
  // return this.lastMonth;
};

CategorySchema.methods.setSpent = function(expenses) {
  // take in expenses 
  // set this.spent = sum(expenses) 
  // return this.spent;
};

CategorySchema.methods.setToSpend = function(alloted, spent) {
  this.toSpend = alloted - spent;
  return this.toSpend;
};

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;