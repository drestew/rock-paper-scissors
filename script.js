const computerPlay = function() {
    const playChoice = ['rock', 'paper', 'scissors']
    const playChoiceIndex = Math.floor(Math.random() * 3)
    return playChoice[playChoiceIndex]
}

const playerPlay = function() {
    let playerChoice = prompt('rock, paper, or scissors?')
    return playerChoice.toLowerCase()
}

const playRound = function(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'player wins'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'player wins'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'player wins'
    } else {
        return 'computer wins'
    }
}

const game = function() {
    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++) {
        let result = playRound(playerPlay, computerPlay)
        result = 'player wins' ? playerScore++ : computerScore++
        i++
    }
    const winner = playerScore > computerScore ? 'player wins' : 'computer wins'
    document.querySelector('.winner').textContent = winner 
}

game()

