import { MERLIN, MORDERED, MORGANA, PERCIVAL, OBERON, ASSASSIN, LADY } from './characters';

export const GOOD_GUY = 'Good Guy';
export const BAD_GUY = 'Bad Guy';

export const charInfo = {
  [MERLIN]: `${MERLIN} is a loyalist who knows the identity of all the Minions, except ${MORDERED}. ${MERLIN}'s goal is to help the loyalists while keeping his identity a secret, or else he will be assassinated, and the Minions win!`,
  [MORDERED]: `${MORDERED} is a Minion that is uknown to ${MERLIN}.`,
  [MORGANA]: `${MORGANA} is a Minion who appears as ${MERLIN} to ${PERCIVAL}.`,
  [PERCIVAL]: `${PERCIVAL} is a loyalist who can see ${MERLIN} (and ${MORGANA} if she is in the game, but doesn't know which is which).`,
  [OBERON]: `${OBERON} is a Minion who niether knows nor is known by other Minions.`,
  [ASSASSIN]: `${ASSASSIN} is a Minion who can assassinate a player at the end of the game. If ${MERLIN} is killed, the Minions win, regardless of the outcomes of the quests`,
  [GOOD_GUY]: `${GOOD_GUY} is a loyalist whose goal is to make sure three missions succeed. Be careful who you pick for your quests!`,
  [BAD_GUY]: `${BAD_GUY} is a Minion whose goal is to make sure three missions fail. Try to be sneaky!`,
  [LADY]: `The ${LADY} token is used to view the allegiance of another player, who then inherits the token`,
};
