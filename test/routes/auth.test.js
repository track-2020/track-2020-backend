const { getAgent } = require('./data-helpers');
const User = require('../../lib/models/User');
const app = require('../../lib/app');
const mongoose = require('mongoose');
const request = require('supertest');

describe('auth routes', () => {
  it('can sign up a new user', () => {
    return request(app)
      .post('/api/v1/auth/signup')
      .send({
        username: 'bob',
        email: 'email@email.com',
        password: 'hello',
        issues: [mongoose.Types.ObjectId()]
      })
      .then(res => {
        expect(res.body).toEqual({
          username: 'bob',
          email: 'email@email.com',
          issues: expect.any(Array),
          _id: expect.any(String)
        });
      });
  });

  it('can sign in a user', () => { 
    return User.create({
      username: 'hello',
      email: 'email@email.com',
      password: 'hello',
      issues: [mongoose.Types.ObjectId()]
    })
      .then(() => {
        return request(app)
          .post('/api/v1/auth/signin')
          .send({
            username: 'hello',
            password: 'hello'
          });
      })
      .then(res => {
        expect(res.body).toEqual({ username: 'hello', issues: [expect.any(String)] });
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

