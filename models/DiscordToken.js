const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const DiscordTokenSchema = new mongoose.Schema({
  access_token: {
    type: String,
    default: ''
  },
  token_type: {
    type: String,
    default: ''
  },
  refresh_token: {
    type: String,
    default: ''
  },
  scope: {
    type: String,
    default: ''
  },
  expires_in: {
    type: Number
  },
  timestamp: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('DiscordToken', DiscordTokenSchema);
