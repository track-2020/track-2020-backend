const mongoose = require('mongoose');
const { hash, compare } = require('../utils/hash');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: false
  },
  issues: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Issue'
  }
}, {
  toJSON: {
    transform: function(doc, ret) {
      delete ret.passwordHash;
      delete ret.__v;
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
    });
});

userSchema.statics.findByToken = function(token) {
  return Promise.resolve(jwt.verify(token, process.env.AUTH_SECRET))
    .then(result => result.payload);
};

userSchema.statics.signin = function(username, password) {
  return this
    .findOne({ username })
    .select({
      passwordHash: true,
      username: true,
      issues: true
    })
    .then(user => {
      if(!user) return null;
      return compare(password, user.passwordHash)
        .then(result => {
          if(!result) return null;
          const token = user.authToken();
          return { username: user.username, token, issues: user.issues };
        });
    });
};

userSchema.methods.authToken = function() {
  return jwt.sign(
    { payload: this.toJSON() },
    process.env.AUTH_SECRET,
    { expiresIn: '25h' }
  );
};
module.exports = mongoose.model('User', userSchema);
