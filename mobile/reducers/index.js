import { combineReducers } from 'redux';
import { firebaseStateReducer } from 'react-redux-firebase';
import currentPlayerReducer from './currentPlayer-reducer';
// Add Firebase to reducers
export default combineReducers({
  firebase: firebaseStateReducer,
  currentPlayer: currentPlayerReducer,
});
