const computerPlay = function() {
    let playChoice = ['rock', 'paper', 'scissors']
    const selection = playChoice[Math.floor(Math.random() * 3)]
    console.log(selection)
}

computerPlay()