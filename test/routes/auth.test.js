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
        email: 'email@bob.com',
        password: 'password',
        issues: [mongoose.Types.ObjectId()]
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

  it.skip('can sign in a user', () => { 
    return User.create({
      username: 'hello',
      email: 'email@hello.com',
      password: 'password',
      issues: [mongoose.Types.ObjectId()]
    })
      .then(() => {
        return request(app)
          .post('/api/v1/auth/signin')
          .send({
            username: 'hello',
            password: 'password'
          });
      })
      .then(res => {
        expect(res.body).toEqual({ username: 'hello', issues: [{ _id: expect.any(String), title: expect.any(String), description: expect.any(String) }],
          candidates: [
            { _id: expect.any(String), name: expect.any(String), image: expect.any(String), bio: expect.any(String), issues: [{ _id: expect.any(String), title: expect.any(String), score: 3 }] }
          ] });
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

