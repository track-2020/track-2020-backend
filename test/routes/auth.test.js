const { getAgent } = require('./data-helpers');
const User = require('../../lib/models/User');
const app = require('../../lib/app');
const mongoose = require('mongoose');
const request = require('supertest');
const KnownError = require('../../lib/middleware/known-error');

describe('auth routes', () => {

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('can sign up a new user', () => {
    return request(app)
      .post('/api/v1/auth/signup')
      .send({
        username: 'bob',
        email: 'email@bob.com',
        password: 'password',
        issues: ['lgbtq']
      })
      .then(res => {
        expect(res.body).toEqual({
          username: 'bob',
          email: 'email@bob.com',
          issues: expect.any(Array),
          _id: expect.any(String)
        });
      });
  });

  it('rejects a password less than 8 digits long with KnownError', () => {
    return User.create({
      username: 'hello',
      email: 'emailed@hello.com',
      password: 'pass',
      issues: ['lgbtq']
    })
      .catch(err => {
        const result = err instanceof KnownError;
        expect(result).toBe(true);
      });
  });

  it('can login a user', () => { 
    return request(app)
      .post('/api/v1/auth/signup')
      .send({
        username: 'hello',
        email: 'emailed@hello.com',
        password: 'password',
        issues: ['lgbtq']
      })
      .then(() => {
        return request(app)
          .post('/api/v1/auth/login')
          .send({
            email: 'emailed@hello.com',
            password: 'password'
          });
      })
      .then(res => { 
        expect(res.body).toEqual({
          username: 'hello',
          token: expect.any(String),
          issues: expect.any(Array),
          _id: expect.any(String)
        });
      });
  });

  it('can verify login', () => {
    return getAgent() 
      .get('/api/v1/auth/verify')
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          username: 'cindy',
          email: 'megan@megan',
          issues: [expect.any(String)]
        });
      });
  });
});
