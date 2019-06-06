require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../../lib/models/User');
const { tokenize, untokenize } = require('../../lib/utils/token');

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
    const objectId = mongoose.Types.ObjectId();
    const user = new User({
      username: 'fun user',
      password: 'password',
      email: 'email.com',
      issues: [objectId]
    });
    expect(user.toJSON()).toEqual({
      username: 'fun user',
      email: 'email.com',
      _id: expect.any(mongoose.Types.ObjectId),
      issues: [objectId]
    });
  });
  it('has a tempPassword', () => {
    const objectId = mongoose.Types.ObjectId();
    const user = new User({
      username: 'fun user',
      password: 'password',
      email: 'email.com',
      issues: [objectId]
    });
    expect(user._tempPassword).toEqual('password');
  });

  it('can find a token', () => {
    const objectId = mongoose.Types.ObjectId();
    return User.create({
      username: 'megan',
      password: 'password',
      email: 'email@email.com',
      issues: [objectId]
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
          issues: [objectId.toString()]
        });
      });
  });
});
