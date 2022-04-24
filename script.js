const playerOptions = {
  paper: { beats: 'rock', loses: 'scissors' },
  rock: { beats: 'scissors', loses: 'paper' },
  scissors: { beats: 'paper', loses: 'rock' },
}

const computerPlay = function () {
  const playChoice = ['rock', 'paper', 'scissors']
  const playChoiceIndex = Math.floor(Math.random() * 3)
  return playChoice[playChoiceIndex]
}

const userOptions = document.querySelectorAll('.user-btn')
const userSelection = userOptions.forEach((selection) => {
  selection.addEventListener('click', function () {
    playRound(this.textContent, computerPlay())
  })
})

// Playing the game
const selectWinner = function (roundWinner) {
  let winner
  if (roundWinner === 'tie') {
    winner = 'Tie!'
  } else {
    winner = roundWinner === 'user' ? 'You Win!' : 'Computer Wins!'
  }
  document.querySelector('.winner').textContent = winner
}

let userScore = 0
let computerScore = 0
const scoreTally = function (roundWinner) {
  let curScore
  if (roundWinner === 'user') {
    userScore += 1
    curScore = userScore
  } else if (roundWinner === 'computer') {
    computerScore += 1
    curScore = computerScore
  }
  const scoreEl = document.querySelector(`.players__${roundWinner}-score`)
  scoreEl.textContent = curScore
  if (userScore === 5 || computerScore === 5) {
    document.querySelector('.winner').textContent = `${
      roundWinner === 'user' ? 'You win' : 'Computer wins'
    } the game!`
  } else {
    selectWinner(roundWinner)
  }
}

const currentScore = function (roundWinner) {
  const winner = roundWinner === 'user' ? userScore : computerScore
  document.querySelector(`.players__${roundWinner}-score`).textContent = winner
}

const playRound = function (userSelection, computerSelection) {
  userSelection = userSelection.toLowerCase()
  if (playerOptions[userSelection].beats === computerSelection) {
    scoreTally('user')
  } else if (playerOptions[userSelection] === computerSelection) {
    scoreTally('tie')
  } else {
    scoreTally('computer')
  }
}
