const mongoose = require('mongoose');
const { hash, compare } = require('../utils/hash');
const jwt = require('jsonwebtoken');
const KnownError = require('../middleware/known-error');

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
  },
  issues: {
    type: [String],
    enum: ['electability', 'lgbtq', 'environment', 'economy', 'reproductive health', 'healthcare', 'immigration', 'foreign policy', 'gun violence', 'criminal justice reform', 'voting rights', 'tax fairness', 'gender rights', 'education', 'racial justice'],
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
  if(password.length < 8) {
    const error = new KnownError(435, 'Password must be at least 8 characters.');
    throw error;
  }
  this._tempPassword = password;
});

userSchema.pre('save', function(next) {
  return hash(this._tempPassword)
    .then(hashed => {
      this.passwordHash = hashed;
      next();
    });
});

userSchema.statics.findByToken = function(token) {
  try {
    return Promise.resolve(jwt.verify(token, process.env.AUTH_SECRET))
      .then(result => result.payload);
  }
  catch(err) {
    throw new KnownError(400, 'Missing Token');
  }
};

userSchema.statics.login = function(email, password) {
  return this
    .findOne({ email })
    .select({
      passwordHash: true,
      username: true,
      issues: true,
    })
    .then(user => {
      if(!user) return null;
      return compare(password, user.passwordHash)
        .then(result => {
          if(!result) return null;
          const token = user.authToken();
          return { username: user.username, token, issues: user.issues, _id: user._id };
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
