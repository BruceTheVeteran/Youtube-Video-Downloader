const mongoose = require('mongoose');
const UserSessionSchema = new mongoose.Schema({
  userId: {
    type: String,
    default: null
  },
  timestamp: {
    type: Date,
    default: Date.now()
  },
  referral: {
    type: String,
    default: ''
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});
module.exports = mongoose.model('UserSession', UserSessionSchema);
