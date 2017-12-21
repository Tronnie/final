const router = require("express").Router();
const activityRoutes = require("./activities");

// routes
router.use("/activities", activityRoutes);

module.exports = router;
