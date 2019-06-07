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
  });
