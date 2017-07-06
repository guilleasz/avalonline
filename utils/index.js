export const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export const generateChars = (numPlayers, goodChars, badChars) => {
  if (numPlayers < 5) throw new Error('Too few players');
  if (numPlayers > 10) throw new Error('Too many players');

  const numBad = Math.floor((numPlayers - 1) / 2);
  if (badChars.length > numBad) throw new Error('Too many special bad characters');
  const numGood = numPlayers - numBad;
  const allChars = [];
  for (let i = 0; i < numBad; i++) {
    if (badChars[i]) allChars.push({ role: 'bad', special: badChars[i] });
    else allChars.push({ role: 'bad', special: false, charIndex: i - (badChars.length - 1) });
  }
  for (let i = 0; i < numGood; i++) {
    if (goodChars[i]) allChars.push({ role: 'good', special: goodChars[i] });
    else allChars.push({ role: 'good', special: false, charIndex: i - (goodChars.length - 1) });
  }
  return shuffle(allChars);
};

export const generateCharsFromEvent = (e) => {
  const goodChars = [];
  const badChars = [];
  goodChars.push('Merlin');
  badChars.push('Assassin');
  if (e.target.percival.checked) goodChars.push('Percival');
  if (e.target.morgana.checked) badChars.push('Morgana');
  if (e.target.mordred.checked) badChars.push('Mordred');
  if (e.target.oberon.checked) badChars.push('Oberon');
  return [goodChars, badChars];
};

export const howManyPlayersOnQuest = (totalPlayers, round) => {
  const playerMatrix = [
    [2, 3, 2, 3, 3],
    [2, 3, 4, 3, 4],
    [2, 3, 3, 4, 4],
    [3, 4, 4, 5, 5],
    [3, 4, 4, 5, 5],
    [3, 4, 4, 5, 5],
  ];
  return playerMatrix[totalPlayers - 5][round - 1];
};

export const questNeedsTwoFails = (totalPlayers, round) => totalPlayers >= 7 && round === 4;

export const setupInitalGameState = (players, ladyBool) => {
  const playerIds = Object.keys(players);
  const totalPlayers = playerIds.length;
  const turnOrder = shuffle(playerIds);
  const state = 'choosing';
  const numOfRejectsNeeded = 1;
  const numPlayersOnQuest = howManyPlayersOnQuest(totalPlayers, 1);
  const questLeader = 0;
  const lady = ladyBool ? playerIds[totalPlayers - 1] : false;
  const voteFails = 0;
  return { turnOrder, state, numOfRejectsNeeded, numPlayersOnQuest, questLeader, lady, voteFails };
};

export const setupPlayerRoles = (players, goodChars, badChars) => {
  const playerIds = Object.keys(players);
  const totalPlayers = playerIds.length;
  const allChars = generateChars(totalPlayers, goodChars, badChars);
  playerIds.forEach((playerId, i) => {
    Object.assign(players[playerId], allChars[i]);
  });
};
