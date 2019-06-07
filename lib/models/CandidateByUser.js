const mongoose = require('mongoose');

const candidateByUserSchema = new mongoose.Schema({
  candidate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Candidate',
    required: true
  },
  issue1Score: {
    issue: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Issue'
    },
    score: Number
  },
  issue2Score: {
    issue:{
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
  },
  issue5Score: {
    issue: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Issue'
    },
    score: Number
  }
});

module.exports = mongoose.model('CandidateByUser', candidateByUserSchema);
