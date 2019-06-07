const { Router } = require('express');
const Issue = require('../models/Issue');

module.exports = Router()
  .post('/', (req, res, next) => {
    const {
      title,
      description,
      image
    } = req.body;
    Issue
      .create({ title, description, image })
      .then(createdIssue => {
        res.send(createdIssue);
      })
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Issue
      .find()
      .lean()
      .select({ __v: false })
      .then(foundIssues => res.send(foundIssues))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Issue
      .findById(req.params.id)
      .lean()
      .select({ __v: false })
      .then(foundIssue => res.send(foundIssue))
      .catch(next);
  })
  .patch('/:id', (req, res, next) => {
    Issue
      .findByIdAndUpdate(req.params.id, { image: req.body.image, description: req.body.description }, { new: true })
      .lean()
      .select({ __v: false })
      .then(updated => res.send(updated))
      .catch(next);
  })
  .delete('/:id', (req, res, next) => {
    Issue.findByIdAndDelete(req.params.id)
      .lean()
      .select({ __v: false })
      .then(deleted => res.send(deleted))
      .catch(next);
  });
