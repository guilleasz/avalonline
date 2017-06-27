import { MERLIN, MORDERED, MORGANA, PERCIVAL, OBERON, ASSASSIN } from './characters';

export const GOOD_GUY = 'Good Guy';
export const BAD_GUY = 'Bad Guy';

export default {
  [MERLIN]: `${MERLIN} knows all the bad guys except for ${MORDERED}. ${MERLIN}'s goal is to keep his identity a secret, or else he will be assassinated!`,
  [MORDERED]: `${MORDERED} knows other bad guys except for Oberon and is unknown to ${MERLIN}.`,
  [MORGANA]: `${MORGANA} appears as ${MERLIN} to ${PERCIVAL}.`,
  [PERCIVAL]: `${PERCIVAL} can see both ${MERLIN} and ${MORGANA}, but doesn't know who is which.`,
  [OBERON]: `${OBERON} is an unknown evil, and also doesn't know the other evils.`,
  [ASSASSIN]: `${ASSASSIN} can kill ${MERLIN} at the end of the game, and win, by figuring out who ${MERLIN} is.`,
  [GOOD_GUY]: `${GOOD_GUY}'s goal is to make sure the missions pass. Be careful who you pick for your quests!`,
  [BAD_GUY]: `${BAD_GUY}'s goal is to make sure 3 missions fail. Try to be sneaky!`,
};
