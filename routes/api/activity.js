const router = require("express").Router();
const aController = require("../../controllers/controller");

// Matches with "/api/date"
router.route("/")
  .get(aController.findAll)
  .post(aController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(aController.findById)
  .put(aController.update)
  .delete(aController.remove);

module.exports = router;


// figure out what this is