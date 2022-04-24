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

let userScore = 0
let computerScore = 0
const pointScore = function (roundWinner) {
  roundWinner === 'user' ? (userScore += 1) : (computerScore += 1)
}

const playRound = function (userSelection, computerSelection) {
  userSelection = userSelection.toLowerCase()
  if (userSelection === 'rock' && computerSelection === 'scissors') {
    pointScore('user')
    document.querySelector('.players__user-score').textContent = userScore
    document.querySelector('.winner').textContent = 'You Win!'
  } else if (userSelection === 'scissors' && computerSelection === 'paper') {
    pointScore('user')
    document.querySelector('.players__user-score').textContent = userScore
    document.querySelector('.winner').textContent = 'You Win!'
  } else if (userSelection === 'paper' && computerSelection === 'rock') {
    pointScore('user')
    document.querySelector('.players__user-score').textContent = userScore
    document.querySelector('.winner').textContent = 'You Win!'
  } else if (userSelection === computerSelection) {
    document.querySelector('.winner').textContent = 'Tie!'
  } else {
    pointScore('computer')
    document.querySelector('.players__computer-score').textContent =
      computerScore
    document.querySelector('.winner').textContent = 'Computer Wins!'
  }
}
