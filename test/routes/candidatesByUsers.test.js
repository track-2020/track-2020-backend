require('dotenv').config();
const request = require('supertest');
const app = require('../../lib/app');
const CandidateByUser = require('../../lib/models/CandidateByUser');
const connect = require('../../lib/utils/connect');
const mongoose = require('mongoose');

describe('candidate by user routes', () => {
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
      .post('/api/vi/candidatesByUser')
  })
})
