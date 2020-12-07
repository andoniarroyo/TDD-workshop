const advanceRules = {
    from0: loserScore => '15',
    from15: loserScore => '30',
    from30: loserScore => '40',
    from40: loserScore => loserScore === "40" ? "A" : "40",
    fromA: loserScore => 'A'
  };

const getLoserPlayer = winner => winner === 'player1' ? 'player2' : 'player1'

const createGameScore = (player1, player2, isFinished, winner) => ({
  player1,
  player2,
  isFinished,
  winner
});

const calculateNewGameScore = (previousGameScore, winner) => {
  const { winnerScore, loserScore } = getWinerLoserScores(previousGameScore, winner);

  const newWinnerScore = calculateNewWinnerScore(winnerScore, loserScore);
  const newLoserScore = calculateNewLoserScore(winnerScore, newWinnerScore, loserScore);

  const { player1Score, player2Score } = getPlayersScore(winner, newWinnerScore, newLoserScore);
  const isMatchFinished = isFinished(winnerScore, newWinnerScore, loserScore);
  const matchWinner = isMatchFinished ? winner : undefined  
    
  return createGameScore(player1Score, player2Score, isMatchFinished, matchWinner);
}

const getWinerLoserScores = (gameScore, winner) => (
  {
    winnerScore: gameScore[winner],
    loserScore: gameScore[getLoserPlayer(winner)]
  }
)

const calculateNewWinnerScore = (winnerScore, loserScore) =>
  advanceRules[`from${winnerScore}`](loserScore);

// The loser was in advance but the winner won, the loser is back to 40
const calculateNewLoserScore = (winnerScore, newWinnerScore, loserScore) =>
  ((newWinnerScore === winnerScore) && loserScore === 'A') ? '40' : loserScore

const getPlayersScore = (winner, newWinnerScore, newLoserScore) => {
  const player1Score = winner === 'player1' ? newWinnerScore : newLoserScore;
  const player2Score = winner === 'player2' ? newWinnerScore : newLoserScore;
  return {
    player1Score,
    player2Score
  }
}

const isFinished = (winnerScore, newWinnerScore, loserScore) =>
  (newWinnerScore === winnerScore) && loserScore !== 'A';

// public API
export const player1Scored = previousGameScore => calculateNewGameScore(previousGameScore, 'player1')

export const player2Scored = previousGameScore => calculateNewGameScore(previousGameScore, 'player2')
