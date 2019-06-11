const { Router } = require('express');
const { ensureAuth } = require('../middleware/ensureAuth');
const User = require('../models/User');
const Scores = require('../models/Scores');

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
        const { username, token, issues, _id } = result;

        res.cookie('session', token, {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000
        });
        return Promise.all([
          username, issues, 
          Scores
            .find({ user: _id })
            .lean()
            .populate('issue', {
              __v: false,
              description: false
            })
            .populate('candidate', {
              __v: false
            })]);


      })
      .then(([username, issues, scores]) => {
        res.send({
          username,
          issues,
          candidates: scores.map(score => ({
            _id: score.candidate._id,
            name: score.candidate.name,
            issue: 
          }))
        })
      })
  }) 
  .get('/verify', ensureAuth, (req, res, next) => {
    res.send(req.user);
  });

  // const newArray = array.reduce((acc, score) => {
  //   console.log(score.candidate._id);
  //   if(!acc[score.candidate._id]) {
  //     acc[score.candidate._id] = {
  //       _id: score.candidate._id,
  //       name: score.candidate.name,
  //       issues: []
  //     }
  //   }
  //   acc[score.candidate._id].issues.push({
  //     _id: score.issue._id,
  //     title: score.issue.title,
  //     score: score.score
  //   })
  //   return acc;
    
