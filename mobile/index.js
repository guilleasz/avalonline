import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import store from './store';
import JoinLobbyContainer from './containers/JoinLobbyContainer';
import LobbyContainer from './containers/LobbyContainer';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/mobile">
        <IndexRoute component={JoinLobbyContainer} />
        <Route path="play/:lobbyId" component={LobbyContainer} />
      </Route>
    </Router>
  </Provider>, document.getElementById('app'));
