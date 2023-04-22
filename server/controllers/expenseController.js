const Expense = require ('../models/ExpenseModel');
const mongoose = require('mongoose');


// get all expenses
const getExpenses = async (req, res) => {
  const user_id = req.user._id

  const expenses = await Expense.find({ user_id }).sort({date: -1});

  res.status(200).json(expenses);
}


// get a single expense
const getSingleExpense = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such expense'});
  }

  const expense = await Expense.findById(id);

  if (!expense) {
    return res.status(404).json({error: 'No such expense'});
  }

  res.status(200).json(expense);
}


// create a new expense
const createExpense = async (req, res) => {
  console.log(req.user)
  console.log(req.body)
  const {date, amount, category, description, account, user_email} = req.body;

  let emptyFields = [];

  if (!date) {
    emptyFields.push('date')
  }
  if (!amount) {
    emptyFields.push('amount')
  }
  if (!category) {
    emptyFields.push('category')
  }
  if (!description) {
    emptyFields.push('description')
  }
  if (!account) {
    emptyFields.push('account')
  }

  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }


  try {
    const user_id = req.user._id
    const expense = await Expense.create({date, amount, category, description, account, user_id, user_email});
    res.status(200).json(expense);
  } catch (err) {
    res.status(400).json({
      error: err.message
    })
  }
}

// delete an expense
const deleteExpense = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such expense'});
  }

  const expense = await Expense.findOneAndDelete({_id: id});

  if (!expense) {
    return res.status(404).json({error: 'No such expense'});
  }

  res.status(200).json(expense);
}


// update an expense
const updateExpense = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such expense'});
  }

  const expense = await Expense.findOneAndUpdate({_id: id}, {
    ...req.body
  });

  if (!expense) {
    return res.status(404).json({error: 'No such expense'});
  }

  res.status(200).json(expense);
}


module.exports = {
  createExpense,
  getExpenses,
  getSingleExpense,
  deleteExpense,
  updateExpense
}