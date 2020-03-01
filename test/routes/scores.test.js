require('dotenv').config();
const request = require('supertest');
const app = require('../../lib/app');
const Scores = require('../../lib/models/Scores');
const connect = require('../../lib/utils/connect');
const mongoose = require('mongoose');
const { scoreTestData, returnScores } = require('./score-data');



describe('scores routes', () => {
  beforeAll(() => {
    return connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });


  afterAll(() => {
    return mongoose.connection.close();
  });
  
  it('can create a new score', () => {
    return request(app)
      .post('/api/v1/scores')
      .send({
        candidate: 'biden',
        user: mongoose.Types.ObjectId(),
        issue: 'lgbtq',
        createdAt: '2020-03-01T07:29:19.051Z',
        updatedAt: '2020-03-01T07:29:45.402Z',
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
  it('can get a score by user id', () => {
    return Scores.create(scoreTestData[0])
      .then(createdScore => {
        return request(app)
          .get(`/api/v1/scores/${createdScore.user}`);
      })
      .then(res => {
        expect(res.body).toEqual({
          user: expect.any(String),
          scoresByCandidate: expect.any(Object)
        });
      });
  });
  
  it('can get multiples score by user id', () => {
    const createScore = scoreTest => {
      return Scores.create(scoreTest);
    };
    const awaitScore = async scoreTest => {
      return createScore(scoreTest);
    };
    const createScores = async scoreTestData => {
      return Promise.all(scoreTestData.map(scoreTest => awaitScore(scoreTest)));
    };
    return createScores(scoreTestData)
      .then(createdScores => {
        return request(app)
          .get(`/api/v1/scores/${createdScores[1].user}`);
      })
      .then(res => {
        expect(res.body).toEqual(returnScores);
      });
  });
});



