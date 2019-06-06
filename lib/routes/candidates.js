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
