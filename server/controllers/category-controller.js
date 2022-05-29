const { Category } = require("../models");

const categoryController = {
    
    
    // get all Categories
  getCategories(req, res) {
    Category.find()
      .select("-__v")
      .then((dbCategoryData) => {
        res.json(dbCategoryData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // get single Category by id
  getSingleCategory(req, res) {
    Category.findOne({ _id: req.params.categoryId })
      .select("-__v")
      .then((dbCategoryData) => {
        if (!dbCategoryData) {
          return res.status(404).json({ message: "No category with this id!" });
        }
        res.json(dbCategoryData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // create a new Category
  createCategory(req, res) {
    Category.create(req.body)
      .then((dbCategoryData) => {
        if (!dbCategoryData) {
          return res
            .status(404)
            .json({ message: "Category created but no user with that email" });
        }
        res.json({ message: "Category successfully created!" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // update a Category
//   async updateCategory(req, res) {
//     const previousOwnerEmail = await Category.findById(req.params.categoryId);
//     const newOwnerEmail = req.body.ownerEmail;

//     if (previousOwnerEmail.ownerEmail !== newOwnerEmail) {
//       await User.findOneAndUpdate(
//         { email: previousOwnerEmail.ownerEmail },
//         { $pull: { months: req.params.categoryId } },
//         { new: true }
//       );

//       await User.findOneAndUpdate(
//         { email: newOwnerEmail },
//         { $push: { months: req.params.categoryId } },
//         { new: true }
//       );
//     }

//     await Category.findOneAndUpdate(
//       { _id: req.params.categoryId },
//       {
//         $set: req.body,
//       },
//       {
//         runValidators: true,
//         new: true,
//       }
//     )

//       .then((dbCategoryData) => {
//         if (!dbCategoryData) {
//           return res.status(404).json({ message: "No category with this id!" });
//         }
//         res.json(dbCategoryData);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   },

  //   remove a Category
  deleteCategory(req, res) {
    Category.findOneAndDelete({ _id: req.params.categoryId })
      .then((dbCategoryData) => {
        if (!dbCategoryData) {
          return res.status(404).json({ message: "No category with this id!" });
        }

        res.json(dbCategoryData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

module.exports = categoryController;
