const mongoose = require('mongoose');

const candidateByUserSchema = new mongoose.Schema({
  candidate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Candidate',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  issue0Score: {
    issue: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Issue'
    },
    score: Number
  },
  issue1Score: {
    issue:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Issue'
    },
    score: Number
  },
  issue2Score: {
    issue: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Issue'
    },
    score: Number
  },
  issue3Score: {
    issue: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Issue'
    },
    score: Number
  },
  issue4Score: {
    issue: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Issue'
    },
    score: Number
  }
});

module.exports = mongoose.model('CandidateByUser', candidateByUserSchema);
