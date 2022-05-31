const { SubCategory } = require("../models");

// notes:
    // when a new subcategory is created, use the 'parentCategory' string property to 
        // 1. find that Category in the db
        // 2. update that Category's 'subCategories' array to include the newly-created subcategory's id

        // when a subcategory is updated, IF the 'parentCategory' string property has been changed, 
        // 1. find the new Category in the db
        // 2. update that new Category's 'subCategories' array to include the newly-created subcategory's id
        // 3 find the old parent Category in the db
        // 4. remove the subcategory's id from the old parent Category's 'subCategories' array

        // when a subcategory is deleted, use the 'parentCategory' string property to 
        // 1. find that Category in the db
        // 2. update that Category's 'subCategories' array to NOT include the newly-created subcategory's id

const subCategoryController = {
    
    
    // get all SubCategories
  getSubCategories(req, res) {
    SubCategory.find()
      .select("-__v")
      .then((dbSubCatData) => {
        res.json(dbSubCatData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // get single SubCategory by id
  getSingleSubCategory(req, res) {
    SubCategory.findOne({ _id: req.params.subCategoryId })
      .select("-__v")
      .then((dbSubCatData) => {
        if (!dbSubCatData) {
          return res.status(404).json({ message: "No sub-category with this id!" });
        }
        res.json(dbSubCatData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // create a new SubCategory
  createSubCategory(req, res) {
    SubCategory.create(req.body)
      .then((dbSubCatData) => {
        if (!dbSubCatData) {
          return res
            .status(404)
            .json({ message: "Sub-Category created but no user with that email" });
        }
        res.json({ message: "Sub-Category successfully created!" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // update a SubCategory
//   updateSubCategory(req, res) {
  
//     SubCategory.findOneAndUpdate(
//       { _id: req.params.subCategoryId },
//       {
//         $set: req.body,
//       },
//       {
//         runValidators: true,
//         new: true,
//       }
//     )
//       .then((dbSubCatData) => {
//         if (!dbSubCatData) {
//           return res.status(404).json({ message: "No sub-category with this id!" });
//         }
//         res.json(dbSubCatData);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   },

  //   remove a SubCategory
  deleteSubCategory(req, res) {
    SubCategory.findOneAndDelete({ _id: req.params.subCategoryId })
      .then((dbSubCatData) => {
        if (!dbSubCatData) {
          return res.status(404).json({ message: "No sub-category with this id!" });
        }

        res.json(dbSubCatData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

module.exports = subCategoryController;
