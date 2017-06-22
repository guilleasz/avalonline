import axios from 'axios';
import { SET_PLAYER } from '../types';

export const setPlayer = payload => ({
  type: SET_PLAYER,
  payload,
});

export const getPlayerId = lobbyId => dispatch =>
  axios.get(`/${lobbyId}/getPlayer`)
  .then(res => res.data)
  .then(({ id }) => dispatch(setPlayer(id)));
