require('dotenv').config();
const { tokenize } = require('../../lib/utils/token');
const { ensureAuth } = require('../../lib/middleware/ensureAuth');

describe('ensureAuth middlware', () => {
  it('validates a good token', done => {
    const token = tokenize({
      username: 'funky',
    });

    const req = {
      cookies: {
        session: token
      }
    };
    const res = {};
    const next = () => {
      expect(req.user).toEqual({
        username: 'funky',
      });
      done();
    };
    ensureAuth(req, res, next);
  });
});
