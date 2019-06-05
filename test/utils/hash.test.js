const { hash, compare } = require('../../lib/utils/hash');

describe('hashing functions', () => {
  it('hashes a password', () => {
    return hash('password')
      .then(hashedPassword => {
        expect(hashedPassword).toEqual(expect.any(String));
        expect(hashedPassword).not.toEqual('password');
      });
  });

  it('can compare passwords', () => {
    const password = 'password';
    
    return hash(password)
      .then(hashedPassword => {
        return compare('password', hashedPassword);
      })
      .then(compareResult => {
        expect(compareResult).toBeTruthy();
      });
  });

  it('can compare bad passwords', () => {
    const password = 'password1234';

    return hash(password)
      .then(hashedPassword => {
        return compare('password', hashedPassword);
      })
      .then(compareResult => {
        expect(compareResult).toBeFalsy();
      });
  });
});
