import axios from "axios";

export default {
  // trying to add to database
  saveActivity: function(activityData) {
    return axios.post("/api/activities", activityData);
  }
};
