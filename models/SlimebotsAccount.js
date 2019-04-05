const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SlimeBotsAccountSchema = new mongoose.Schema({
  Email: {
    type: String,
    default: ''
  },
  DiscordChain: {
    type: String,
    default: ''
  },
  TwitchID: {
    type: String,
    default: ''
  },
  Referrals: {
    type: Array,
    default: []
  }
});

module.exports = mongoose.model('SlimeBotsAccount',SlimeBotsAccountSchema);
