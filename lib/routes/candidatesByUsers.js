const { Router } = require('express');
const CandidateByUser = require('../models/CandidateByUser');

module.exports = Router()
  .post('/', (req, res, next) => {
    const {
      candidate,
      issue1Score,
      issue2Score,
      issue3Score,
      issue4Score,
      issue5Score
    } = req.body;

    CandidateByUser
      .create({ candidate, issue1Score, issue2Score, issue3Score, issue4Score, issue5Score })
      .then(createdCand => {
        console.log('hello');
        res.send(createdCand);
      })
      .catch(next);
  })
  .get('/', (req, res, next) => {
    CandidateByUser
      .find()
      .select({ __v: false })
      .lean()
      .then(candidatesByUsers => res.send(candidatesByUsers))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    CandidateByUser
      .findById(req.params.id)
      .select({ __v: false })
      .lean()
      .then(foundUserCand => res.send(foundUserCand))
      .catch(next);
  });
