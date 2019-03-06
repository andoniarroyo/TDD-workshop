const from0 = () => '15';
const from15 = () => '30';
const from30 = () => '40';
const from40 = (loserPoints) => loserPoints === "40" ? "A" : "40"; 
const fromA = () => 'A';

const advanceRules = {
    from0,
    from15,
    from30,
    from40,
    fromA,
  };

const getLoserPlayer = (winner) => winner === 'player1' ? 'player2' : 'player1'

const createGameScore = (player1, player2, isFinished, winner) => ({
 player1,
 player2,
 isFinished,
 winner : isFinished ? winner : undefined
})

const playerScored = (previousGameScore, winner) => {
    const winnerScore = previousGameScore[winner];
    const loser = getLoserPlayer(winner);
    const loserScore = previousGameScore[loser];

    const newWinnerScore = advanceRules[`from${winnerScore}`](loserScore);
    const newLoserScore = ((newWinnerScore === winnerScore) && loserScore === 'A') ? '40' : loserScore

    const isFinished = (newWinnerScore === winnerScore) && loserScore!=='A'
    
    const player1 = winner === 'player1' ? newWinnerScore : newLoserScore;
    const player2 = winner === 'player2' ? newWinnerScore : newLoserScore;

    return createGameScore(player1, player2, isFinished, winner);
}

export const player1Scored = (previousGameScore) => playerScored(previousGameScore, 'player1')

export const player2Scored = (previousGameScore) => playerScored(previousGameScore, 'player2')
