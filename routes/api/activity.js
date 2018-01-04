const router = require("express").Router();
const activityController = require("../../controllers/controller");

// Matches with "/api/somethingidk"
router.route("/")
  .get(activityController.findAll)
  .post(activityController.create);

// Matches with "/api/activity/:id"
router
  .route("/:id")
  .get(activityController.findById)
  .put(activityController.update)
  .delete(activityController.remove);

module.exports = router;


// figure out what this is