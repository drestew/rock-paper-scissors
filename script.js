const computerPlay = function () {
  const playChoice = ['rock', 'paper', 'scissors']
  const playChoiceIndex = Math.floor(Math.random() * 3)
  return playChoice[playChoiceIndex]
}

const playerPlay = function () {
  let playerChoice = prompt('rock, paper, or scissors?')
  return playerChoice.toLowerCase()
}

const playRound = function (playerSelection, computerSelection) {
  //playerSelection.toLowerCase()
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'player wins'
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'player wins'
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'player wins'
  } else if (playerSelection === computerSelection) {
    return 'tie'
  } else {
    return 'computer wins'
  }
}

const game = function () {
  let playerScore = 0
  let computerScore = 0
  for (let i = 0; i < 5; i++) {
    let playerChoice = playerPlay()
    let computerChoice = computerPlay()
    let result = playRound(playerChoice, computerChoice)
    if (result === 'player wins') {
      playerScore++
    } else if (result === 'computer wins') {
      computerScore++
    }
  }
  const winner = playerScore > computerScore ? 'PLAYER!' : 'COMPUTER!'
  console.log('winner is ', winner, playerScore, computerScore)
  document.querySelector('.winner').textContent = winner
  const scoreDiv = document.createElement('div')
  const scoreText = document.createTextNode(
    `Final score is ${Math.max(playerScore, computerScore)} to ${Math.min(
      playerScore,
      computerScore
    )}`
  )
  scoreDiv.appendChild(scoreText)
  document.body.insertBefore(scoreText, scoreDiv.nextSibling)
}

game()
