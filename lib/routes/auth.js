const { Router } = require('express');
const { ensureAuth } = require('../middleware/ensureAuth');
const User = require('../models/User');

module.exports = Router()
  .post('/signup', (req, res, next) => {
    const {
      username,
      email,
      password,
      issues
    } = req.body;
    User  
      .create({ email, password, username, issues })
      .then(user => {
        console.log(user, 'user');
        res.cookie('session', user.authToken(), {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000
        });
        res.send(user);
      })
      .catch(next);
  })
  .post('/signin', (req, res, next) => {
    const {
      username,
      password
    } = req.body;

    User
      .signin(username, password)
      .then(result => {
        if(!result) {
          const error = 'Invalid login';
          error.status = 401;
          return next(error);
        }
        const { user, token } = result;

        res.cookie('session', token, {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000
        });
        res.send(user);
      });
  }) 
  .get('/verify', ensureAuth, (req, res, next) => {
    res.send(req.user);
  });
