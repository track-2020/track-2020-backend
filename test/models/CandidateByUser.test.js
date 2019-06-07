const mongoose = require('mongoose');
const CandidateByUser = require('../../lib/models/CandidateByUser');

describe('candidateByUser model', () => {
  it('has candidate, user, and scores', () => {
    const candidateOne = new CandidateByUser({
      candidate: mongoose.Types.ObjectId(),
      user: mongoose.Types.ObjectId(),
      issue0Score: {
        issue: mongoose.Types.ObjectId(),
        score: 0
      },
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
      }
    });
    expect(candidateOne.toJSON()).toEqual({
      candidate: expect.any(mongoose.Types.ObjectId),
      user: expect.any(mongoose.Types.ObjectId),
      issue0Score: {
        issue: expect.any(mongoose.Types.ObjectId),
        score: 0
      },
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
      _id: expect.any(mongoose.Types.ObjectId)
    });
  });
  it('has a required candidate and user field', () => {
    const candidateOne = new CandidateByUser({
      issue0Score: {
        issue: mongoose.Types.ObjectId(),
        score: 0
      },
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
    });
    const errors = candidateOne.validateSync().errors;

    expect(errors.candidate.message).toEqual('Path `candidate` is required.');
    expect(errors.user.message).toEqual('Path `user` is required.');
  });
});
