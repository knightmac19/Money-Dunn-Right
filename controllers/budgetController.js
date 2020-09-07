const db = require('../models');

module.exports = {
  findAll: (req, res) => {
    db.Budget.find({})
      .populate('categories')
      .populate('bankAccounts')
      .populate('creditCards')
      .populate('currencies')
      .populate('paychecks')
      .sort({ dateCreated: -1 })
      .then(dbBudget => {
        res.json(dbBudget);
      })
      .catch(err => {
        res.status(422).json(err);
      });
  },

  findById: (req, res) => {
    db.Budget.findById(req.params.id)
      .populate('categories')
      .populate('paychecks')
      .then(dbBudget => {
        res.json(dbBudget);
      })
      .catch(err => {
        res.status(422).json(err);
      });
  },

  create: (req, res) => {
    const budget = new db.Budget(req.body);
    budget.setLastUpdated();
    budget.setTotalIncome();
    budget.setTotalSpent();
    budget.setSavedThisMonth();

    db.Budget.create(budget).then(budget => {
      db.User.findByIdAndUpdate(
        budget.UserID,
        {
          $push: {
            budgets: {
              _id: budget._id
            }
          }
        },
        { new: true }
      )
        then(dbUser => {
          res.json(dbUser);
        })
        .catch(err => {
          res.status(422).json(err);
          console.log(err);
        });
    });
  },

  update: (req, res) => {
    db.Budget.findByIdAndUpdate(
      req.params.id,
      {
        lastUpdated: Date.now()
      },
      {
        new: true
      }
    )
      .then(updatedBudget => {
        res.json(updatedBudget);
      })
      .catch(err => {
        res.status(422).json(err);
      });
  },

  delete: (req, res) => {
    let message = `Budget ${req.body.id.BudgetID} destroyed`;

    db.Budget.findByIdAndDelete(req.body.id.BudgetID)
      .then(removeCategories => {
        db.Category.deleteMany({ _id: { $in: removeCategories.categories } }).then(
          result => {
            res.json(result);
          }
        );
      })
      .then(removeBankAccounts => {
        db.BankAccount.deleteMany({ _id: { $in: removeBankAccounts.bankAccounts } }).then(
          result => {
            res.json(result);
          }
        );
      })
      .then(removeCreditCards => {
        db.CreditCard.deleteMany({ _id: { $in: removeCreditCards.creditCards } }).then(
          result => {
            res.json(result);
          }
        );
      })
      .then(removeCurrencies => {
        db.Currency.deleteMany({ _id: { $in: removeCurrencies.currencies } }).then(
          result => {
            res.json(result);
          }
        );
      })
      .then(removePaychecks => {
        db.Paycheck.deleteMany({ _id: { $in: removePaychecks.paychecks } }).then(
          result => {
            res.json(result);
          }
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

};