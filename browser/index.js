import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import store from './store';
import MainPage from './lobby/components/MainPage';
import Navbar from './lobby/components/Navbar';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/browser" component={Navbar}>
        <Route path="Home" component={MainPage} />
        <IndexRedirect to="Home" />
      </Route>
    </Router>
  </Provider>, document.getElementById('app'));
