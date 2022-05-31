const router = require("express").Router();

// const accountRoutes = require("./account-routes");
const categoryRoutes = require("./category-routes");
// const dollarsRoutes = require("./dollars-routes");
// const expenseRoutes = require("./expense-routes");
// const incomeRoutes = require("./income-routes");

const monthRoutes = require("./month-routes");
// const pesosRoutes = require("./pesos-routes");
// const projectedIncomeRoutes = require("./projectedIncome-routes");
const subCategoryRoutes = require("./subCategory-routes");

const userRoutes = require("./user-routes");
const yearRoutes = require("./year-routes");

// ------------------------------------------------------

// router.use("/account", accountRoutes);
router.use("/categories", categoryRoutes);
// router.use("/dollars", dollarsRoutes);
// router.use("/expense", expenseRoutes);
// router.use("/income", incomeRoutes);

router.use("/months", monthRoutes);
// router.use("/pesos", pesosRoutes);
// router.use("/projectedIncome", projectedIncomeRoutes);
router.use("/subCategories", subCategoryRoutes);

router.use("/users", userRoutes);
router.use("/years", yearRoutes);

module.exports = router;
