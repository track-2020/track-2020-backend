const KnownError = require('./known-error');
module.exports = (req, res, next) => {
  const error = new KnownError('Not Found');
  error.status = 404;

  next(error);
};
