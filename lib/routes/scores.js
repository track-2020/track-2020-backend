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
  .get('/:user', (req, res, next) => {
    Scores
      .find({ user: req.params.user })
      .select({ __v: false })
      .lean()
      .then(foundUserCand => res.send(foundUserCand))
      .catch(next);
  })
  .patch('/:id', (req, res, next) => {
    Scores
      .findOneAndUpdate(req.params.id, { score: req.body.score }, { new: true })
      .lean()
      .select({ __v: false })
      .then(updated => res.send(updated))
      .catch(next);
  })
  .delete('/:user', (req, res, next) => {
    Scores
      .findOneAndDelete({ user: req.params.user })
      .lean()
      .select({ __v: false })
      .then(deleted => res.send(deleted))
      .catch(next);
  })
  .get('/scores/:user', (req, res, next) => {
    Scores
      .find({ user: req.params.user })
      .lean()
      .populate('issue', {
        __v: false,
        description: false
      })
      .populate('candidate', {
        __v: false
      })
      .populate('user', {
        __v: false,
        email: false
      })
      .select({ __v: false })
      .then(scores => {
        console.log(scores);
        const candidatesScores = scores.reduce((acc, score) => {
          if(!acc[score.candidate._id]) {
            acc[score.candidate._id] = {
              _id: score.candidate._id,
              name: score.candidate.name,
              issues: []
            };
          }
          acc[score.candidate._id].issues.push({
            _id: score.issue._id,
            title: score.issue.title,
            score: score.score
          });
        }, []);
      })
  });
