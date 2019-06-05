const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors);

app.use(require('morgan')('tiny', {
  skip: () => process.env.NODE_ENV === 'test'
}));

app.use(express.json());

module.exports(app);
