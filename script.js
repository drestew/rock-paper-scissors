const computerPlay = function() {
    const playChoice = ['rock', 'paper', 'scissors']
    const playChoiceIndex = Math.floor(Math.random() * 3)
    const selection = playChoice[playChoiceIndex]
}


const playRound = function(playerSelection, computerSelection) {
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