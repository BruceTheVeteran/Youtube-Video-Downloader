const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const DiscordUserSchema = new mongoose.Schema({
  id: {
    type: String,
    default: ''
  },
  username: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  verified: {
    type: Boolean,
    default: ''
  },
  locale: {
    type: String,
    default: ''
  },
  premium_type: {
    type: String,
    default: ''
  },
  mfa_enabled: {
    type: Boolean,
    default: false
  },
  flags: {
    type: String,
    default: ''
  },
  avatar: {
    type: String,
    default: ''
  },
  discriminator: {
    type: String
  },
  timestamp: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('DiscordUser', DiscordUserSchema);
