import expect from 'expect';
import { player1Scored, player2Scored } from '../sut';

const gameScoreFactory = (player1 = '0', player2 = '0') => (
  {
    player1,
    player2
  }
)

const checkGameExpectations = (newGameScore, player1Score, player2Score, isFinished, winner) => {
  expect(newGameScore.player1).toBe(player1Score);
  expect(newGameScore.player2).toBe(player2Score);
  expect(newGameScore.isFinished).toBe(isFinished);
  expect(newGameScore.winner).toBe(winner);
}

describe('The game score calculator', () => {
  describe('playing the gane', () => {
    it('increases the player1 score when it wins the point', () => {
      const previousGameScore = gameScoreFactory();
      const newGameScore = player1Scored(previousGameScore);
  
      checkGameExpectations(newGameScore, '15', '0', false, undefined);
    });
    it('increases the player2 score when it wins the point', () => {
      const previousGameScore = gameScoreFactory();
      const newGameScore = player2Scored(previousGameScore);
  
      checkGameExpectations(newGameScore, '0', '15', false, undefined);
    });
    it('increases the winner score from 15 to 30', () => {
      const previousGameScore = gameScoreFactory('15', '0');
      const newGameScore = player1Scored(previousGameScore);
  
      checkGameExpectations(newGameScore, '30', '0', false, undefined);
    });
    it('increases the score from 30 to 40', () => {
      const previousGameScore = gameScoreFactory('30', '0');
      const newGameScore = player1Scored(previousGameScore);
  
      checkGameExpectations(newGameScore, '40', '0', false, undefined);
    });
    it('gives advantage if both players were in deuce (40 - 40)', () => {
      const previousGameScore = gameScoreFactory('40', '40');
      const newGameScore = player1Scored(previousGameScore);

      checkGameExpectations(newGameScore, 'A', '40', false, undefined);
    });
    it('sets the deuce again if the other player had advantage', () => {
      const previousGameScore = gameScoreFactory('A', '40');
      const newGameScore = player2Scored(previousGameScore);
  
      checkGameExpectations(newGameScore, '40', '40', false, undefined);
    });
  })
  describe('finishing the game', () => {
    it('from the 40 score', () => {
      const previousGameScore = gameScoreFactory('0', '40');
      const newGameScore = player2Scored(previousGameScore);
  
      checkGameExpectations(newGameScore, '0', '40', true, 'player2');
    })
    it('from the A score', () => {
      const previousGameScore = gameScoreFactory('A', '40');
      const newGameScore = player1Scored(previousGameScore);
  
      checkGameExpectations(newGameScore, 'A', '40', true, 'player1');
    })
  })
});