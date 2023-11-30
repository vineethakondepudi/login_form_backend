const mongoose = require('mongoose');

const regularFieldWorkSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
})

const RegularFieldWork = mongoose.model('Topic', regularFieldWorkSchema);

module.exports = RegularFieldWork;