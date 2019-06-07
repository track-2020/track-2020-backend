const { Router } = require('express');
const Scores = require('../models/Scores');

module.exports = Router()
  .post('/', (req, res, next) => {
    const {
      candidate,
      user,
      issue, 
      score
    } = req.body;

    Scores
      .create({ candidate, user, issue, score })
      .then(createdScore => {
        res.send(createdScore);
      })
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Scores
      .find()
      .select({ __v: false })
      .lean()
      .then(foundScores => res.send(foundScores))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Scores
      .find({ user: req.params.id })
      .select({ __v: false })
      .lean()
      .then(foundUserCand => res.send(foundUserCand))
      .catch(next);
  })
  .patch('/:id', (req, res, next) => {
    CandidateByUser.findOneAndUpdate(req.params.id, 
      { $set: { 
        'issue0Score.score': req.body.issue0Score.score, 
        'issue1Score.score': req.body.issue1Score.score, 
        'issue2Score.score': req.body.issue2Score.score, 
        'issue3Score.score': req.body.issue3Score.score, 
        'issue4Score.score': req.body.issue4Score.score } 
      }, 
      { new: true })
      .lean()
      .select({ __v: false })
      .then(updated => res.send(updated))
      .catch(next);
  })
  .delete('/:id', (req, res, next) => {
    CandidateByUser.findByIdAndDelete(req.params.id)
      .lean()
      .select({ __v: false })
      .then(deleted => res.send(deleted))
      .catch(next);
  })
  .get('/user/:user', (req, res, next) => {
    console.log(req.params.user, 'hello');
    CandidateByUser.find({ user: { $elemMatch:req.params.user } })
      .lean()
      .select({ __v: false })
      .then(found => res.send(found))
      .catch(next);
  });
