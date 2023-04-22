const Income = require ('../models/IncomeModel');
const mongoose = require('mongoose');


// get all income entries
const getIncomes = async (req, res) => {
  const user_id = req.user._id

  const incomes = await Income.find({ user_id }).sort({date: -1});

  res.status(200).json(incomes);
}


// get a single income
const getSingleIncome = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such income'});
  }

  const income = await Income.findById(id);

  if (!income) {
    return res.status(404).json({error: 'No such income'});
  }

  res.status(200).json(income);
}


// create a new income
const createIncome = async (req, res) => {
  const {date, amount, source, user_email} = req.body;

  let emptyFields = [];

  if (!date) {
    emptyFields.push('date')
  }
  if (!amount) {
    emptyFields.push('amount')
  }
  if (!source) {
    emptyFields.push('source')
  }

  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }


  try {
    const user_id = req.user._id
    const income = await Income.create({date, amount, source, user_id, user_email});
    res.status(200).json(income);
  } catch (err) {
    res.status(400).json({
      error: err.message
    })
  }
}

// delete an income
const deleteIncome = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such income'});
  }

  const income = await Income.findOneAndDelete({_id: id});

  if (!income) {
    return res.status(404).json({error: 'No such income'});
  }

  res.status(200).json(income);
}


// update an income
const updateIncome = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such income'});
  }

  const income = await Income.findOneAndUpdate({_id: id}, {
    ...req.body
  });

  if (!income) {
    return res.status(404).json({error: 'No such income'});
  }

  res.status(200).json(income);
}


module.exports = {
  createIncome,
  getIncomes,
  getSingleIncome,
  deleteIncome,
  updateIncome
}