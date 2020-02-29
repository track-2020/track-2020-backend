const mongoose = require('mongoose');
const state = require('mongoose/lib/connectionstate');
const KnownError = require('./known-error');

module.exports = (req, res, next) => {
  const readyState = mongoose.connection.readyState;
  if(readyState === state.connected || readyState === state.connecting) {
    next();
  } else {
    const error = new KnownError('Unable to connect to db');
    error.status = 500;
    next(error);
  }
};
