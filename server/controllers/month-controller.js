const { Month, User } = require("../models");

const monthController = {
  // get all Months
  getMonths(req, res) {
    Month.find()
      .select("-__v")
      .then((dbMonthData) => {
        res.json(dbMonthData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // get single month by id
  getSingleMonth(req, res) {
    Month.findOne({ _id: req.params.monthId })
      .select("-__v")
      .then((dbMonthData) => {
        if (!dbMonthData) {
          return res.status(404).json({ message: "No month with this id!" });
        }
        res.json(dbMonthData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // create a new month
  createMonth(req, res) {
    Month.create(req.body)
      .then((dbMonthData) => {
        return User.findOneAndUpdate(
          { email: req.body.ownerEmail },
          { $push: { months: dbMonthData._id } },
          { new: true }
        );
      })
      .then((dbMonthData) => {
        if (!dbMonthData) {
          return res
            .status(404)
            .json({ message: "Month created but no user with that email" });
        }
        res.json({ message: "Month successfully created!" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // update a month
  async updateMonth(req, res) {
    const previousOwnerEmail = await Month.findById(req.params.monthId);
    const newOwnerEmail = req.body.ownerEmail;

    if (previousOwnerEmail.ownerEmail !== newOwnerEmail) {
      await User.findOneAndUpdate(
        { email: previousOwnerEmail.ownerEmail },
        { $pull: { months: req.params.monthId } },
        { new: true }
      );

      await User.findOneAndUpdate(
        { email: newOwnerEmail },
        { $push: { months: req.params.monthId } },
        { new: true }
      );
    }

    await Month.findOneAndUpdate(
      { _id: req.params.monthId },
      {
        $set: req.body,
      },
      {
        runValidators: true,
        new: true,
      }
    )

      .then((dbMonthData) => {
        if (!dbMonthData) {
          return res.status(404).json({ message: "No month with this id!" });
        }
        res.json(dbMonthData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  deleteMonth(req, res) {
    Month.findOneAndDelete({ _id: req.params.monthId })
      .then((dbMonthData) => {
        if (!dbMonthData) {
          return res.status(404).json({ message: "No month with this id!" });
        }

        res.json(dbMonthData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

module.exports = monthController;
