import { SET_PLAYER } from '../types';

export default (state = null, action) => {
  switch (action.type) {
    case SET_PLAYER:
      return action.payload;
    default:
      return state;
  }
};
