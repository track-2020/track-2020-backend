const User = require('../models/User');
const KnownError = require('./known-error');

const ensureAuth = (req, res, next) => {
  if(!req) throw new KnownError(400, 'Invalid token');
  return User
    .findByToken(req.cookies.session)
    .then(user => {
      if(!user) throw new KnownError(400, 'Invalid token');
      req.user = user;
      next();
    })
    .catch(err => next(err));
};

module.exports = { ensureAuth };
