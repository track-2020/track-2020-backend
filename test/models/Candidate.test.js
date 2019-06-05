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
  it('has required name, bio, and image fields', () => {
    const candidate2 = new Candidate({
    
    });
    const errors = candidate2.validateSync().errors;
    
    expect(errors.name.message).toEqual('Path `name` is required.');
    expect(errors.bio.message).toEqual('Path `bio` is required.');
    expect(errors.image.message).toEqual('Path `image` is required.');
  });
});
