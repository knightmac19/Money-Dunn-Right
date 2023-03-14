const Transaction = require ('../models/TransactionModel');
const mongoose = require('mongoose');


// get all transactions
const getTransactions = async (req, res) => {
  const transactions = await Transaction.find({}).sort({createdAt: -1});

  res.status(200).json(transactions);
}


// get a single transaction
const getSingleTransaction = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such transaction'});
  }

  const transaction = await Transaction.findById(id);

  if (!transaction) {
    return res.status(404).json({error: 'No such transaction'});
  }

  res.status(200).json(transaction);
}


// create a new transaction
const createTransaction = async (req, res) => {
  const {date, amount, category, description, account} = req.body;

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
    const transaction = await Transaction.create({date, amount, category, description, account});
    res.status(200).json(transaction);
  } catch (err) {
    res.status(400).json({
      error: err.message
    })
  }
}

// delete a transaction
const deleteTransaction = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such transaction'});
  }

  const transaction = await Transaction.findOneAndDelete({_id: id});

  if (!transaction) {
    return res.status(404).json({error: 'No such transaction'});
  }

  res.status(200).json(transaction);
}


// update a transaction
const updateTransaction = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such transaction'});
  }

  const transaction = await Transaction.findOneAndUpdate({_id: id}, {
    ...req.body
  });

  if (!transaction) {
    return res.status(404).json({error: 'No such transaction'});
  }

  res.status(200).json(transaction);
}


module.exports = {
  createTransaction,
  getTransactions,
  getSingleTransaction,
  deleteTransaction,
  updateTransaction
}