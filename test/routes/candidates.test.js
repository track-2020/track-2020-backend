require('dotenv').config();
const request = require('supertest');
const app = require('../../lib/app');
const Candidate = require('../../lib/models/Candidate');
const connect = require('../../lib/utils/connect');
const mongoose = require('mongoose');

describe('candidate routes', () => {

  beforeAll(() => {
    return connect();
  });

  beforeEach((done) => {
    return mongoose.connection.dropDatabase(done);
  });
  
  afterAll(() => {
    return mongoose.connection.close();
  });

  it('can create a new candidate', () => {
    return request(app)
      .post('/api/v1/candidates')
      .send({
        image: 'string.jpg',
        name: 'warren',
        bio: 'hi'
      })
      .then(res => {
        expect(res.body).toEqual({
          image: 'string.jpg',
          name: 'warren',
          bio: 'hi',
          _id: expect.any(String),
          __v: 0
        });
      });
  });
  it('can get all candidates', () => {
    return Candidate.create({
      image: 'string.jpg',
      name: 'booker',
      bio: 'hi'
    })
      .then(() => {
        return request(app)
          .get('/api/v1/candidates');
      })
      .then(res => {
        expect(res.body).toHaveLength(1);
      });
  });
});
