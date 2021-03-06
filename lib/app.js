const express = require('express');
const app = express();
const cors = require('cors');
const mongoConnection = require('./middleware/mongo-connection');
const { ensureAuth } = require('./middleware/ensureAuth');

app.use(cors());

app.use(require('morgan')('tiny', {
  skip: () => process.env.NODE_ENV === 'test'
}));

app.use(express.json());
app.use(require('cookie-parser')());

app.use('/api/v1/auth', mongoConnection, require('./routes/auth'));
app.use('/api/v1/scores', mongoConnection, ensureAuth, require('./routes/scores'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error-handler'));

module.exports = app;
