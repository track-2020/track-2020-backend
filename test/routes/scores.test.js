require('dotenv').config();
const request = require('supertest');
const app = require('../../lib/app');
const Scores = require('../../lib/models/Scores');
const connect = require('../../lib/utils/connect');
const mongoose = require('mongoose');

const scoreTest = {
  candidate: mongoose.Types.ObjectId(),
  user: mongoose.Types.ObjectId(),
  issue: mongoose.Types.ObjectId(),
  score: 7
};

describe('scores routes', () => {
  beforeAll(() => {
    return connect();
  });

  beforeEach((done) => {
    return mongoose.connection.dropDatabase(done);
  });
  
  afterAll(() => {
    return mongoose.connection.close();
  });
  
  it('can create a new score', () => {
    return request(app)
      .post('/api/v1/scores')
      .send({
        candidate: mongoose.Types.ObjectId(),
        user: mongoose.Types.ObjectId(),
        issue: mongoose.Types.ObjectId(),
        score: 8
      })
      .then(res => {
        expect(res.body).toEqual({
          candidate: expect.any(String),
          user: expect.any(String),
          issue: expect.any(String),
          score: 8,
          __v: 0,
          _id: expect.any(String)
        });
      });
  });
  it('can get all scores', () => {
    return Scores.create(scoreTest)
      .then(() => {
        return request(app)
          .get('/api/v1/scores');
      })
      .then(res => {
        expect(res.body).toHaveLength(1);
      });
  });
  it('can get all scores by user id', () => {
    return Scores.create(scoreTest)
      .then(createdScore => {
        return request(app)
          .get(`/api/v1/scores/${createdScore.user}`);
      })
      .then(res => {
        expect(res.body).toEqual([{
          candidate: expect.any(String),
          user: expect.any(String),
          issue: expect.any(String),
          score: 7,
          _id: expect.any(String)
        }]);
      });
  });
  it('can update a score', () => {
    return CandidateByUser.create(userCandidate)
      .then(userCand => {
        return request(app)
          .patch(`/api/v1/candidatesByUsers/${userCand._id}`)
          .send({
            issue0Score: {
              score: 2
            },
            issue1Score: {
              score: 4
            }, 
            issue2Score: {
              score: 5
            },
            issue3Score: {
              score: 4
            },
            issue4Score: {
              score: 1
            }
          });
      })
      .then(res => {
        expect(res.body).toEqual({
          candidate: expect.any(String),
          user: expect.any(String),
          issue0Score: {
            issue: expect.any(String),
            score: 2
          },
          issue1Score: {
            issue: expect.any(String),
            score: 4
          },
          issue2Score: {
            issue: expect.any(String),
            score: 5
          },
          issue3Score: {
            issue: expect.any(String),
            score: 4
          },
          issue4Score: {
            issue: expect.any(String),
            score: 1
          },
          _id: expect.any(String)
        });
      });
  });
  it('deletes a candidateByUserById', () => {
    return CandidateByUser.create(userCandidate)
      .then(createdUserCand => {
        return request(app)
          .delete(`/api/v1/candidatesByUsers/${createdUserCand._id}`);
      })
      .then(deletedUserCand => {
        expect(deletedUserCand.body).toEqual({
          candidate: expect.any(String),
          user: expect.any(String),
          issue1Score: {
            issue: expect.any(String),
            score: 0
          },
          issue2Score: {
            issue: expect.any(String),
            score: 0
          },
          issue3Score: {
            issue: expect.any(String),
            score: 0
          },
          issue4Score: {
            issue: expect.any(String),
            score: 0
          },
          issue0Score: {
            issue: expect.any(String),
            score: 0
          },
          _id: expect.any(String)
        });
      });
  });
  it('can get a list of candidatesbyusers by user id', () => {
    return CandidateByUser.create({
      candidate: '5cfab42626ba7379d3cea223',
      user: '5cfab39926ba7379d3cea21f',
      issue0Score: {
        issue: '5cfab21c26ba7379d3cea21a',
        score: 5
      },
      issue1Score: {
        issue: '5cfab2c826ba7379d3cea21b',
        score: 1
      },
      issue2Score: {
        issue: '5cfab2d126ba7379d3cea21c',
        score: 10
      },
      issue3Score: {
        issue: '5cfab2da26ba7379d3cea21d',
        score: 1
      },
      issue4Score: {
        issue: '5cfab2e126ba7379d3cea21e',
        score: 17
      }
    })
      .then(createdUserCand => {
        return request(app)
          .get(`/api/v1/candidatesByUser/user/${createdUserCand.user}`);
      })
      .then(foundCand => {
        expect(foundCand).toEqual({
          candidate: expect.any(String),
          user: expect.any(String),
          issue1Score: {
            issue: expect.any(String),
            score: 0
          },
          issue2Score: {
            issue: expect.any(String),
            score: 0
          },
          issue3Score: {
            issue: expect.any(String),
            score: 0
          },
          issue4Score: {
            issue: expect.any(String),
            score: 0
          },
          issue0Score: {
            issue: expect.any(String),
            score: 0
          },
          _id: expect.any(String)
        });
      });
  });
});
