

## **The tennis game score tracker:**

The application calculates the score for tennis game (only a game not the complete match). It gets the current score of the game and the winner of the point and returns the new game score.

The rules to score in a game are defined here: https://en.wikipedia.org/wiki/Tennis_scoring_system

The structure to be returned should include:

- **player1 score**

- **player2 score**

- **isFinished**

- **winner (only reported if the game is finished)**

  
For instance:

- P1 (0) P2 (0), wins P1 => P1(15) P2(0)

- P1 (15) P2 (0), wins P1 => P1(30) P2(0)

- P1 (30) P2 (0), wins P1 => P1(40) P2(0)

- P1 (40) P2 (0), wins P2 => P1(40) P2(15)

- P1 (40) P2 (15), wins P2 => P1(40) P2(30)

- P1 (40) P2 (30), wins P2 => DEUCE

- DEUCE, wins P2 => P1(40) P2(A)

- P1(40) P2(A) wins P1 => DEUCE

- DEUCE, wins P1 => P1(A) P2(40)

- P1(A) P2(40) wins P1 => P1 WINS!

  

## **How to start:**
using npm:
 - npm it

using yarn:

 - yarn
 - yarn test
