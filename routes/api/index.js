const router = require("express").Router();
const activityRoutes = require("./activity");

// routes
router.use("/activity", activityRoutes);

module.exports = router;
