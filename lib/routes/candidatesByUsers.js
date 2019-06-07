const { Router } = require('express');
const CandidateByUser = require('../models/CandidateByUser');

module.exports = Router()
  .post('/', (req, res, next) => {
    const {
      candidate,
      user,
      issue0Score,
      issue1Score,
      issue2Score,
      issue3Score,
      issue4Score
    } = req.body;

    CandidateByUser
      .create({ candidate, user, issue1Score, issue2Score, issue3Score, issue4Score, issue0Score })
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
  })
  .patch('/:id', (req, res, next) => {
    CandidateByUser.findOneAndUpdate(req.params.id, { $set: { 'issue0Score.score': req.body.issue0Score.score, 'issue1Score.score': req.body.issue1Score.score, 'issue2Score.score': req.body.issue2Score.score, 'issue3Score.score': req.body.issue3Score.score, 'issue4Score.score': req.body.issue4Score.score } }, { new: true })
      .lean()
      .select({ __v: false })
      .then(updated => res.send(updated))
      .catch(next);
  });
