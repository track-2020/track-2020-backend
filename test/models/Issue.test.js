const mongoose = require('mongoose');
const Issue = require('../../lib/models/Issue');

describe('issue model', () => {
  it('has title, description, and image', () => {
    const issue = new Issue({
      title: 'environment',
      description: 'it is important',
      image: 'string.jpg'
    });
    expect(issue.toJSON()).toEqual({
      title: 'environment',
      description: 'it is important',
      image: 'string.jpg',
      _id: expect.any(mongoose.Types.ObjectId)
    });
  });
  it('has required title, description, and image fields', () => {
    const issue = new Issue({
    
    });
    const errors = issue.validateSync().errors;
    
    expect(errors.title.message).toEqual('Path `title` is required.');
    expect(errors.description.message).toEqual('Path `description` is required.');
    expect(errors.image.message).toEqual('Path `image` is required.');
  });
});
