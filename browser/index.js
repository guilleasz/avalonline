import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, indexRoute } from 'react-router';
// import store from './store';
import MainLobby from './lobby/components/MainPage';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={MainLobby} />
  </Router>, document.getElementById('app'));
