const { getAgent } = require('./data-helpers');
const User = require('../../lib/models/User');
const app = require('../../lib/app');
const mongoose = require('mongoose');
const request = require('supertest');

describe('auth routes', () => {
  // it('can sign up a new user', () => {
  //   return request(app)
  //     .then(res => {
  //       expect(res.body).toEqual({
  //         user: {
  //           username: 'hello',
  //           email: 'email@email.com',
  //           issues: [expect.any(String)],
  //           _id: expect.any(String)
  //         },
  //         token: expect.any(String)
  //       });
  //     });
  // });
  it('can verify login', () => {
    return getAgent() 
      .get('/api/v1/auth/verify')
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          username: 'hello',
          email: 'megan@megan',
          issues: [expect.any(String)]
        });
      });
  });
});
