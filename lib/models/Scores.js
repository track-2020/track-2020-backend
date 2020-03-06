const mongoose = require('mongoose');

const scoresSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  candidate: {
    type: String,
    enum: ['biden', 'sanders', 'buttigieg', 'warren', 'klobuchar', 'bloomberg'],
    required: true
  },
  issue: {
    type: String,
    enum: ['electability', 'lgbtq', 'general', 'environment', 'economy', 'reproductiveHealth', 'healthcare', 'immigration', 'foreignPolicy', 'gunViolence', 'criminalJustice', 'votingRights', 'taxFairness', 'genderRights', 'education', 'racialJustice'],
    required: true
  },
}, { timestamps: true });

module.exports = mongoose.model('Scores', scoresSchema);

