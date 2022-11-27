let userScore = 0;
let computerScore = 0;
// const rounds = prompt('How Many Rounds Do You Want To Play?')

function print(mssg, elementID) {
    document.getElementById(elementID).innerHTML = mssg;
}

function play(userWeapon) {
    // const rockButton = document.getElementById('Rock');
    // const paperButton = document.getElementById('Paper');
    // const scissorsButton = document.getElementById('Scissors');
    
    // let userWeapon;
    // while (userWeapon  === undefined) {
    //     rockButton.addEventListener('click', () => {
    //     userWeapon = 'Rock';
    //     return userWeapon;
    //     })
    //     paperButton.addEventListener('click', () => {
    //         userWeapon = 'Paper';
    //         return userWeapon;
    //     })
    //     scissorsButton.addEventListener('click', () => {
    //         userWeapon = 'Scissors';
    //         return userWeapon;
    //     })
    // }

    const OPTIONS = ['Rock', 'Paper', 'Scissors']
    const randomIndex = Math.floor(Math.random() * OPTIONS.length);
    const computerWeapon = OPTIONS[randomIndex];
    print(`The Computer Chose ${computerWeapon}`, 'computer_choice');

    if (computerWeapon === userWeapon) {
        print('It Was A Tie!', 'result');
    } else if ((computerWeapon === 'Rock' && userWeapon === 'Paper') || (computerWeapon === 'Paper' && userWeapon === 'Scissors') || (computerWeapon === 'Scissors' && userWeapon === 'Rock')) {
        print('You Won!', 'result');
        userScore = userScore + 1
    } else if ((userWeapon === 'Rock' && computerWeapon === 'Paper') || (userWeapon === 'Paper' && computerWeapon === 'Scissors') || (userWeapon === 'Scissors' && computerWeapon === 'Rock')) {
        print('The Computer Won!', 'result');
        computerScore = computerScore + 1
    }
    print(computerScore, 'computer_score')
    print(userScore, 'user_score')
}