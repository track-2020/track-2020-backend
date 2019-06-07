const mongoose = require('mongoose');
const CandidateByUser = require('../../lib/models/CandidateByUser');

describe('candidate model', () => {
  it('has name, bio, and image', () => {
    const candidateOne = new CandidateByUser({
      candidate: mongoose.Types.ObjectId(),
      issue1Score: {
        issue: mongoose.Types.ObjectId(),
        score: 0
      },
      issue2Score: {
        issue: mongoose.Types.ObjectId(),
        score: 0
      },
      issue3Score: {
        issue: mongoose.Types.ObjectId(),
        score: 0
      },
      issue4Score: {
        issue: mongoose.Types.ObjectId(),
        score: 0
      },
      issue5Score: {
        issue: mongoose.Types.ObjectId(),
        score: 0
      }
    });
    expect(candidateOne.toJSON()).toEqual({
      candidate: expect.any(mongoose.Types.ObjectId),
      issue1Score: {
        issue: expect.any(mongoose.Types.ObjectId),
        score: 0
      },
      issue2Score: {
        issue: expect.any(mongoose.Types.ObjectId),
        score: 0
      },
      issue3Score: {
        issue: expect.any(mongoose.Types.ObjectId),
        score: 0
      },
      issue4Score: {
        issue: expect.any(mongoose.Types.ObjectId),
        score: 0
      },
      issue5Score: {
        issue: expect.any(mongoose.Types.ObjectId),
        score: 0
      },
      _id: expect.any(mongoose.Types.ObjectId)
    });
  });
  it('has a required candidate field', () => {
    const candidateOne = new CandidateByUser({
      issue1Score: {
        issue: mongoose.Types.ObjectId(),
        score: 0
      },
      issue2Score: {
        issue: mongoose.Types.ObjectId(),
        score: 0
      },
      issue3Score: {
        issue: mongoose.Types.ObjectId(),
        score: 0
      },
      issue4Score: {
        issue: mongoose.Types.ObjectId(),
        score: 0
      },
      issue5Score: {
        issue: mongoose.Types.ObjectId(),
        score: 0
      },
    });
    const errors = candidateOne.validateSync().errors;

    expect(errors.candidate.message).toEqual('Path `candidate` is required.');
  });
});
