const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');

const PORT = process.env.PORT || 8080;
const app = express();
module.exports = app;

app
  .use(morgan('dev'))
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.static(path.join(__dirname, '..', 'node_modules')))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(passport.initialize())
  .use(passport.session())
  .use('/api', require('./api'))
  .use((req, res, next) =>
    path.extname(req.path).length > 0 ? res.status(404).send('Not found') : next())
  .use('*', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/indexBrowser.html')))
  .use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });

app.listen(PORT, () =>
  console.log(`Mixing it up on port ${PORT}`));
