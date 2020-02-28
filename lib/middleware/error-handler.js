const { KnownError } = require('./known-error'); 
// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  let statusCode = 500;
  let error = 'Server Error';

  if(err instanceof KnownError) {
    statusCode = err.statusCode;
    error = err.message;
  }

  res
    .status(statusCode)
    .send({
      error,
    });
};

