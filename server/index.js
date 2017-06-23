const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const firebase = require('firebase');

const PORT = process.env.PORT || 8080;
const app = express();
module.exports = app;

const config = {
  apiKey: 'AIzaSyBElq6GNRBb9jWUN_bo3Z9BO8ylM5QceSo',
  authDomain: 'spacialon.firebaseapp.com',
  databaseURL: 'https://spacialon.firebaseio.com',
  projectId: 'spacialon',
  storageBucket: 'spacialon.appspot.com',
  messagingSenderId: '222055391136',
};
firebase.initializeApp(config);

app
  .use(morgan('dev'))
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.static(path.join(__dirname, 'public/assets')))
  .use(express.static(path.join(__dirname, '..', 'node_modules')))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  }))
  .use((req, res, next) =>
    (path.extname(req.path).length > 0 ? res.status(404).send('Not found') : next()))
  .use('/mobile', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/indexMobile.html')))
  .get('/:lobbyId/getPlayer', (req, res) => {
    if (req.session.id) {
      res.json({ id: req.session.id });
    } else {
      const key = firebase.database().ref(`/${req.params.lobbyId}/players`).push().key;
      req.session.id = key;
      res.json({ id: req.session.id });
    }
  })
  .use('*', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/indexBrowser.html')))
  .use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    console.log(err);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });

app.listen(PORT, () =>
  console.log(`Mixing it up on port ${PORT}`));
