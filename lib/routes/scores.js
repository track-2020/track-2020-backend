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
      .catch(next);
  })
  
  .get('/:user', (req, res, next) => {
    Scores
      .find({ user: req.params.user })
      .select({ __v: false })
      .lean()
      .then(foundUserCand => res.send(foundUserCand))
      .catch(next);
  });
