require('dotenv').config();
const request = require('supertest');
const app = require('../../lib/app');
const Scores = require('../../lib/models/Scores');
const connect = require('../../lib/utils/connect');
const mongoose = require('mongoose');

const scoreTest = {
  candidate: 'biden',
  user: mongoose.Types.ObjectId(),
  issue: 'lgbtq+',
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
        candidate: 'biden',
        user: mongoose.Types.ObjectId(),
        issue: 'lgbtq+',
      })
      .then(res => {
        expect(res.body).toEqual({
          candidate: expect.any(String),
          user: expect.any(String),
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
          issue: expect.any(String),
          __v: 0,
          _id: expect.any(String)
        });
      });
  });
  it.skip('can get all scores by user id', () => {
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
          _id: expect.any(String)
        }]);
      });
  });
});
