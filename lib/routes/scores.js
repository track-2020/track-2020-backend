const { Router } = require('express');
const Scores = require('../models/Scores');

module.exports = Router()
  .post('/', (req, res, next) => {
    const {
      candidate,
      user,
      issue
    } = req.body;

    Scores
      .create({ candidate, user, issue })
      .then(createdScore => {
        res.send(createdScore);
      })
      .catch(err => next(err));
  })
  
  .get('/:user', (req, res, next) => {
    const user = req.params.user;
    Scores
      .find({ user })
      .select({
        __v: false,
        createdAt: false,
      })
      .lean()
      .then(userScores => {
        if(userScores.length < 1) res.send({ user, scoresByCandidate: {} });
        const scoresByCandidate = userScores.reduce((acc, score) => {
          if(!acc[score.candidate]) acc[score.candidate] = {};
          acc[score.candidate][score.issue] ? acc[score.candidate][score.issue]++ : acc[score.candidate][score.issue] = 1;
          acc[score.candidate].total ? acc[score.candidate].total++ : acc[score.candidate].total = 1;
          return acc;
        }, {});
        res.send({ user, scoresByCandidate });
      })
      .catch(next);
  });
