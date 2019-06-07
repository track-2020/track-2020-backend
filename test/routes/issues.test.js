require('dotenv').config();
const request = require('supertest');
const app = require('../../lib/app');
const Issue = require('../../lib/models/Issue');
const connect = require('../../lib/utils/connect');
const mongoose = require('mongoose');

describe('issues routes', () => {
  beforeAll(() => {
    return connect();
  });

  beforeEach((done) => {
    return mongoose.connection.dropDatabase(done);
  });
  
  afterAll(() => {
    return mongoose.connection.close();
  });

  it('creates a new issue', () => {
    return request(app)
      .post('/api/v1/issues')
      .send({
        title: 'issueOne',
        description: 'important',
        image: 'image.jpg'
      })
      .then(res => {
        expect(res.body).toEqual({
          title: 'issueOne',
          description: 'important',
          image: 'image.jpg',
          __v: 0,
          _id: expect.any(String)
        });
      });
  });
});
