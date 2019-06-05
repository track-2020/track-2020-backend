const mongoose = require('mongoose');
const { hash, compare } = require('../utils/hash');
const uuid = require('uuid/v4');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: String,
  user_id: uuid()
}, {
  toJSON: {
    transform: function(doc, ret) {
      delete ret.passwordHash,
      delete ret.__v
    }
  }
});

userSchema.virtual('password').set(function(password) {
  this._tempPassword = password;
});

userSchema.pre('save', function(next) {
  hash(this._tempPassword) 
    .then(hashedPassword => {
      this.passwordHash = hashedPassword;
      next();
    })
})

const User = mongoose.model('User', userSchema);

module.exports = {
  User
};
