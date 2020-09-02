const router = require('express').Router();
const userController = require('../../controllers/userController');

//Matches with "/api/user"
router
  .route("/")
    .get(userController.findAll)
    .post(userController.create)
    .delete(userController.delete);

//Matches with /api/user/login
//Login require a post instead of a get because it get will not accept req.body.
router
  .route("/login")
    .post(userController.findOne);

// Matches with /api/user/signup
router
  .route("/signup")
    .get(userController.findOne)
    .post(userController.create);

//Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update);


module.exports = router;
