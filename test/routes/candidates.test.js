require('dotenv').config();
const request = require('supertest');
const app = require('../../lib/app');
const Candidate = require('../../lib/models/Candidate');
const connect = require('../../lib/utils/connect');
const mongoose = require('mongoose');

const coryBooker = {
  name: 'cory booker',
  image: 'picture.jpg',
  bio: 'i am vegan'
};

describe('candidate routes', () => {
  beforeAll(() => {
    return connect();
  });

  beforeEach((done) => {
    return mongoose.connection.dropDatabase(done);
  });
  
  afterAll(() => {
    return mongoose.connection.close();
  });

  it('can create a new candidate', () => {
    return request(app)
      .post('/api/v1/candidates')
      .send({
        image: 'string.jpg',
        name: 'warren',
        bio: 'hi'
      })
      .then(res => {
        expect(res.body).toEqual({
          image: 'string.jpg',
          name: 'warren',
          bio: 'hi',
          _id: expect.any(String),
          __v: 0
        });
      });
  });
  it('can get all candidates', () => {
    return Candidate.create({
      image: 'string.jpg',
      name: 'booker',
      bio: 'hi'
    })
      .then(() => {
        return request(app)
          .get('/api/v1/candidates');
      })
      .then(res => {
        expect(res.body).toHaveLength(1);
      });
  });
  it('can get a candidate by id', () => {
    return Candidate.create({
      image: 'string.jpg',
      name: 'booker',
      bio: 'hi'
    })
      .then(createdCandidate => {
        return request(app)
          .get(`/api/v1/candidates/${createdCandidate._id}`);
      })
      .then(res => {
        expect(res.body).toEqual({
          image: 'string.jpg',
          name: 'booker',
          bio: 'hi',
          _id: expect.any(String)
        });
      });
  });
  it('can update a candidate\'s bio and image', () => {
    return Candidate.create(coryBooker)
      .then(createdCandidate => {
        return request(app)
          .patch(`/api/v1/candidates/${createdCandidate._id}`)
          .send({
            bio: 'better bio',
            image: 'better.jpg'
          });
      })
      .then(res => {
        expect(res.body).toEqual({
          name: 'cory booker',
          bio: 'better bio',
          image: 'better.jpg',
          _id: expect.any(String)
        });
      });
  });
  it('deletes a candidate by id', () => {
    return Candidate.create(coryBooker)
      .then(createdCandidate => {
        const id = createdCandidate._id;
        return request(app)
          .delete(`/api/v1/candidates/${id}`);
      })
      .then(deletedCandidate => {
        expect(deletedCandidate.body).toEqual({ ...coryBooker, _id: expect.any(String) });
      });
  });
});
