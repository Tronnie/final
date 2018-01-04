const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  id: { type: String, required: true },
  user_name: { type: String, required: true },
  was_accepted: Boolean,
  date_id: { type: Date, default: Date.now }
});

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;

