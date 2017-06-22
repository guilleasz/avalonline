import { createStore, compose, applyMiddleware } from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

/* eslint-disable no-underscore-dangle */
let composeEnhancers;
try {
  composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
} catch (err) {
  composeEnhancers = compose;
}
/* eslint-enable */

// Firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyBElq6GNRBb9jWUN_bo3Z9BO8ylM5QceSo',
  authDomain: 'spacialon.firebaseapp.com',
  databaseURL: 'https://spacialon.firebaseio.com',
  projectId: 'spacialon',
  storageBucket: 'spacialon.appspot.com',
  messagingSenderId: '222055391136',
};
// Add redux Firebase to compose


const createStoreWithFirebase = composeEnhancers(
    applyMiddleware([thunk]),
    reactReduxFirebase(firebaseConfig),
  )(createStore);

  // Create store with reducers and initial state
export default createStoreWithFirebase(rootReducer);

