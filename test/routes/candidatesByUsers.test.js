require('dotenv').config();
const request = require('supertest');
const app = require('../../lib/app');
const CandidateByUser = require('../../lib/models/CandidateByUser');
const connect = require('../../lib/utils/connect');
const mongoose = require('mongoose');

const userCandidate = {
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
};

describe('candidates by users routes', () => {
  beforeAll(() => {
    return connect();
  });

  beforeEach((done) => {
    return mongoose.connection.dropDatabase(done);
  });
  
  afterAll(() => {
    return mongoose.connection.close();
  });
  
  it('can create a new candidate by user', () => {
    return request(app)
      .post('/api/v1/candidatesByUsers')
      .send({
        candidate: mongoose.Types.ObjectId(),
        user: mongoose.Types.ObjectId(),
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
        issue0Score: {
          issue: mongoose.Types.ObjectId(),
          score: 0
        }
      })
      .then(res => {
        expect(res.body).toEqual({
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
          __v: 0,
          _id: expect.any(String)
        });
      });
  });
  it('can get all candidatesByUsers', () => {
    return CandidateByUser.create(userCandidate)
      .then(() => {
        return request(app)
          .get('/api/v1/candidatesByUsers');
      })
      .then(res => {
        expect(res.body).toHaveLength(1);
      });
  });
  it('can get a candidateByUser by id', () => {
    return CandidateByUser.create(userCandidate)
      .then(createdUserCand => {
        return request(app)
          .get(`/api/v1/candidatesByUsers/${createdUserCand._id}`);
      })
      .then(res => {
        expect(res.body).toEqual({
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
  it('can update an issue score', () => {
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
});
