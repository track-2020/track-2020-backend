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

  // beforeEach((done) => {
  //   return mongoose.connection.dropDatabase(done);
  // });
  
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
    return Scores.create(scoreTest)
      .then(userCand => {
        return request(app)
          .patch(`/api/v1/scores/${userCand._id}`)
          .send({
            score: 10
          });
      })
      .then(res => {
        expect(res.body).toEqual({
          candidate: expect.any(String),
          user: expect.any(String),
          issue: expect.any(String),
          score: 10,
          _id: expect.any(String)
        });
      });
  });
  it('deletes scores by user id', () => {
    return Scores.create(scoreTest)
      .then(createdScore => {
        return request(app)
          .delete(`/api/v1/scores/${createdScore.user}`);
      })
      .then(deletedUserCand => {
        expect(deletedUserCand.body).toEqual({
          candidate: expect.any(String),
          user: expect.any(String),
          issue: expect.any(String),
          score: 7,
          _id: expect.any(String)
        });
      });
  });
  // it('gets all scores by user and gives them back to ben how he wants them', () => {
  //   return Scores.create({
  //     user: '5cfb049f26ba7379d3cea23e',
  //     issue: '5cfb03e026ba7379d3cea239',
  //     candidate: '5cfb042226ba7379d3cea23c',
  //     score: 4
  //   })
  //     .then(createdScore => {
  //       return request(app)
  //         .get(`/api/v1/scores/totals/${createdScore.user}`);
  //     })
  //     .then(res => {
  //       expect(res.body).toEqual({
  //         _id: '',
  //         username: '',
  //         issues: [{ _id: '', title: '', description: '' }],
  //         candidates: [
  //           { _id: '', name: '', image: '', bio: '', issues: [{ _id: '', title: '', score: 3 }]
  //           }
  //         ] 
  //       });
  //     });
  // });
});
