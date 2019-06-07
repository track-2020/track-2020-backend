require('dotenv').config();
const request = require('supertest');
const app = require('../../lib/app');
const Issue = require('../../lib/models/Issue');
const connect = require('../../lib/utils/connect');
const mongoose = require('mongoose');

const issueOne = {
  title: 'I am issue',
  description: 'I am important',
  image: 'image.jpg'
};

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
  it('finds all issues', () => {
    return Issue.create(issueOne)
      .then(() => {
        return request(app)
          .get('/api/v1/issues')
          .then(foundIssues => {
            expect(foundIssues.body).toHaveLength(1);
          });
      });
  });
  it('finds an issue by id', () => {
    return Issue.create(issueOne)
      .then(createdIssue => {
        return request(app)
          .get(`/api/v1/issues/${createdIssue._id}`)
          .then(foundIssue => {
            expect(foundIssue.body).toEqual({ ...issueOne, _id: expect.any(String) });
          });
      });
  });
});
