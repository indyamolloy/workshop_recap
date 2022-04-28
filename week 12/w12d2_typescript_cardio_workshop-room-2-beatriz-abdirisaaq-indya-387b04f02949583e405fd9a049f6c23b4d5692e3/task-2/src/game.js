/** Some elements that we need to interact with. */
const elements = {
  choiceButtons: document.querySelector("#choices"),
  computerScore: document.querySelector("#computer-score"),
  playerScore: document.querySelector("#player-score"),
  currentOutcome: document.querySelector("#current-outcome"),
};

/** Some related "constants" which represent the various outcomes a round can have. */
export const OUTCOMES = {
  WIN: "WIN",
  DRAW: "DRAW",
  LOSS: "LOSS",
};

/** Some related "constants" which represent the possible choices a player can make when playing. */
export const CHOICES = {
  ROCK: "ROCK",
  PAPER: "PAPER",
  SCISSORS: "SCISSORS",
};

/** Some basic game state, where things like scores are tracked. */
export const model = {
  playerScore: 0,
  computerScore: 0,
};

/** Should return a a randomly selected choice. Either: "ROCK", "PAPER", "SCISSORS" */
export function getRandomComputerMove() {
  const possibleChoices = Object.values(CHOICES);
  const randomIndex = Math.trunc(Math.random() * possibleChoices.length);
  return possibleChoices[randomIndex];
}

/**
 * Should return a promise which resolves to either: "ROCK", "PAPER", or "SCISSORS"
 *
 * To have the promise resolve upon a button click, we "promisify" the click event.
 *
 * To avoid having to set up individual event listeners for each button, event delegation is used. So we listen for an event on just the parent and then use the dataset API to identify which child was clicked.
 *
 * To avoid accumulating event listeners over multiple rounds and any memory leaks, we clean up after ourselves and remove when the event listener (when/if the promise is about to be resolved).
 */
export function getPlayerMove() {
  return new Promise((resolve) => {
    elements.choiceButtons.addEventListener(
      "click",
      function handleClick(event) {
        const buttonWasClicked = event.target instanceof HTMLButtonElement;
        if (buttonWasClicked) {
          const rawChoice = event.target.dataset.choice;
          const choice = CHOICES[rawChoice];
          const choiceIsValid = undefined !== choice;

          if (choiceIsValid) {
            elements.choiceButtons.removeEventListener("click", handleClick);
            resolve(choice);
          } else {
            console.warn(`Unexpected raw choice: ${rawChoice}`);
          }
        }
      }
    );
  });
}

/** Should return an outcome. Either "WIN", "LOSS" or "DRAW" */
export function getOutcomeForRound(playerMove, computerMove) {
  const playerHasDrawn = playerMove === computerMove;

  if (playerHasDrawn) {
    return OUTCOMES.DRAW;
  }

  const playerHasWon =
    (playerMove === CHOICES.PAPER && computerMove === CHOICES.ROCK) ||
    (playerMove === CHOICES.SCISSORS && computerMove === CHOICES.PAPER) ||
    (playerMove === CHOICES.ROCK && computerMove === CHOICES.SCISSORS);

  if (playerHasWon) {
    return OUTCOMES.WIN;
  }

  return OUTCOMES.LOSS;
}

/** Should return a promise which resolves to an object containing information about the played round. */
export async function playOneRound() {
  const playerMove = await getPlayerMove();
  const computerMove = getRandomComputerMove();
  const outcome = getOutcomeForRound(playerMove, computerMove);
  return {
    playerMove,
    computerMove,
    outcome,
  };
}

/** Should return a promise which, if the loop were to stop, would resolve to undefined. */
export async function playGame() {
  while (true) {
    const dataForRound = await playOneRound();

    switch (dataForRound.outcome) {
      case OUTCOMES.WIN:
        model.playerScore++;
        elements.playerScore.textContent = model.playerScore;
        break;
      case OUTCOMES.LOSS:
        model.computerScore++;
        elements.computerScore.textContent = model.computerScore;
        break;
    }

    elements.currentOutcome.textContent = `Result: ${dataForRound.outcome}`;
  }
}

await playGame();
