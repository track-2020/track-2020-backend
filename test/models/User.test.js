require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../../lib/models/User');
const { tokenize } = require('../../lib/utils/token');

describe('User model', () => {
  beforeAll(() => {
    return mongoose.connect('mongodb://localhost:27017/track2020', {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true
    });
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('has a username, password, hash, issues array, and email', () => {
    const user = new User({
      username: 'fun user',
      password: 'password',
      email: 'email.com',
      issues: ['lgbtq']
    });
    expect(user.toJSON()).toEqual({
      username: 'fun user',
      email: 'email.com',
      _id: expect.any(mongoose.Types.ObjectId),
      issues: ['lgbtq']
    });
  });
  it('has a tempPassword', () => {

    const user = new User({
      username: 'fun user',
      password: 'password',
      email: 'email.com',
      issues: ['lgbtq']
    });
    expect(user._tempPassword).toEqual('password');
  });

  it('can find a token', () => {
    return User.create({
      username: 'megan',
      password: 'password',
      email: 'email@email.com',
      issues: ['lgbtq']
    })
      .then(payload => {
        return tokenize(payload);
      })
      .then(token => {
        return User.findByToken(token);
      })
      .then(foundUser => {
        expect(foundUser).toEqual({
          username: 'megan',
          email: 'email@email.com',
          _id: expect.any(String),
          issues: ['lgbtq']
        });
      });
  });
});
