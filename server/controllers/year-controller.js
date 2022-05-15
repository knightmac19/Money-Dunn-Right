const { Year } = require("../models");

const yearController = {
  // get all years
  getYears(req, res) {
    Year.find()
      .select("-__v")
      .then((dbYearData) => {
        res.json(dbYearData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // get single year by id
  getSingleYear(req, res) {
    Year.findOne({ _id: req.params.yearId })
      .select("-__v")
      .then((dbYearData) => {
        if (!dbYearData) {
          return res.status(404).json({ message: "No year with this id!" });
        }
        res.json(dbYearData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // create a new year
  createYear(req, res) {
    Year.create(req.body)
      .then((dbYearData) => {
        res.json(dbYearData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // update a year
  updateYear(req, res) {
    Year.findOneAndUpdate(
      { _id: req.params.yearId },
      {
        $set: req.body,
      },
      {
        runValidators: true,
        new: true,
      }
    )
      .then((dbYearData) => {
        if (!dbYearData) {
          return res.status(404).json({ message: "No year with this id!" });
        }
        res.json(dbYearData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  deleteYear(req, res) {
    Year.findOneAndDelete({ _id: req.params.yearId })
      .then((dbYearData) => {
        if (!dbYearData) {
          return res.status(404).json({ message: "No year with this id!" });
        }

        res.json(dbYearData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

module.exports = yearController;
