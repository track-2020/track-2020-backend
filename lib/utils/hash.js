const bcrypt = require('bcryptjs');
const SALT_ROUNDS = 10;

const hash = password => {
  console.log(password)
   const hashed = bcrypt.hash(password, SALT_ROUNDS);
   console.log(hashed);
   return hashed
};

const compare = (password, hash) => {
  return bcrypt.compare(password, hash);
};

module.exports = {
  hash,
  compare
};
