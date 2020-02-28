const mongoose = require('mongoose');

const scoresSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  candidate: {
    type: String,
    enum: ['biden', 'bloomberg', 'buttigieg', 'klobuchar', 'sanders', 'steyer', 'warren'],
    required: true
  },
  issue: {
    type: String,
    enum: ['electability', 'lgbtq+', 'environment', 'economy', 'reproductive health', 'healthcare', 'immigration', 'foreign policy', 'gun violence', 'criminal justice reform', 'voting rights', 'tax fairness', 'gender rights', 'education', 'racial justice'],
    required: true
  },
}, { timestamps: true });

module.exports = mongoose.model('Scores', scoresSchema);

