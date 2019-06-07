const { Router } = require('express');
const Candidate = require('../models/Candidate');

module.exports = Router()
  .post('/', (req, res, next) => {
    const {
      name,
      bio,
      image
    } = req.body;
    Candidate
      .create({ name, bio, image })
      .then(createdCandidate => res.send(createdCandidate))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Candidate
      .find()
      .select({
        __v: false
      })
      .lean()
      .then(candidates => res.send(candidates))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Candidate
      .findById(req.params.id)
      .select({
        __v: false
      })
      .lean()
      .then(foundCandidate => res.send(foundCandidate))
      .catch(next);
  })
  .patch('/:id', (req, res, next) => {
    Candidate.findByIdAndUpdate(req.params.id, { bio: req.body.bio, image: req.body.image }, { new: true })
      .lean()
      .select({
        __v: false
      })
      .then(updated => res.send(updated))
      .catch(next);
  })
  .delete('/:id', (req, res, next) => {
    Candidate.findByIdAndDelete(req.params.id)
      .lean()
      .select({
        __v: false
      })
      .then(deleted => res.send(deleted))
      .catch(next);
  });
 
