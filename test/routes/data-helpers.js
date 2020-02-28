require('dotenv').config();
const mongoose = require('mongoose');
const connect = require('../../lib/utils/connect');
const request = require('supertest');
const app = require('../../lib/app');

beforeAll(() => {
  return connect();
});


const agent = request.agent(app);

beforeEach(() => {
  return agent
    .post('/api/v1/auth/signup')
    .send({ email: 'megan@megan', password: 'password', username: 'cindy', issues: ['lgbtq+'] });
});

// afterEach((done) => {
//   return mongoose.connection.dropDatabase(done);
// });

afterAll(() => {
  return mongoose.connection.close();
});

module.exports = {
  getAgent: () => agent
};

