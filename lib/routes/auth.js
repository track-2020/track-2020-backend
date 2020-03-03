const { Router } = require('express');
const { ensureAuth } = require('../middleware/ensureAuth');
const User = require('../models/User');
const KnownError = require('../middleware/known-error');

module.exports = Router()
  .post('/signup', (req, res, next) => {
    const {
      username,
      email,
      password,
      issues
    } = req.body;
    User  
      .create({ username, email, password, issues })
      .then(user => {
        res.cookie('session', user.authToken(), {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000
        });
        res.send(user);
      })
      .catch(err => {
        let error = err;
        if(err.code === 11000) {
          error = new KnownError(403, 'This email already exists, try a different email.');
        }
        next(error);
      });
  })
  
  .post('/login', (req, res, next) => {
    const {
      email,
      password
    } = req.body;
    User
      .login(email, password)
      .then(result => {
        if(!result) {
          const error = new KnownError('Invalid login');
          error.status = 401;
          return next(error);
        }
        const { username, token, issues, _id } = result;

        res.cookie('session', token, {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000
        });
        res.send({ username, token, issues, _id });
      })
      .catch(next);
  }) 

  // eslint-disable-next-line no-unused-vars
  .get('/verify', ensureAuth, (req, res, next) => {
    res.send(req.user);
  });


    
