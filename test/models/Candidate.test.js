const mongoose = require('mongoose');
const Candidate = require('../../lib/models/Candidate');

describe('candidate model', () => {
  it('has name, bio, and image', () => {
    const candidate = new Candidate({
      name: 'booker',
      bio: 'he is vegan',
      image: 'string.jpg'
    });
    expect(candidate.toJSON()).toEqual({
      name: 'booker',
      bio: 'he is vegan',
      image: 'string.jpg',
      _id: expect.any(mongoose.Types.ObjectId)
    });
  });
});
