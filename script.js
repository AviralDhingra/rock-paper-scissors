let userScore = 0;
let computerScore = 0;

function print(mssg, elementID) {
    document.getElementById(elementID).innerHTML = mssg;
}

function isGameEnd(computerScore, userScore) {
    const RACE_TO = 3
    if (computerScore === RACE_TO || userScore === RACE_TO) {
        return true;
    } else {
        return false;
    }
}

function play(userWeapon) {
    const OPTIONS = ['Rock', 'Paper', 'Scissors']
    const randomIndex = Math.floor(Math.random() * OPTIONS.length);
    const computerWeapon = OPTIONS[randomIndex];
    print(`The Computer Chose ${computerWeapon}`, 'computer_choice');

    const playerSign = document.getElementById("user_weapon_img");
    const computerSign = document.getElementById("computer_weapon_img");

    switch (userWeapon) {
        case 'Rock':
            playerSign.src = "img/rock.png"
            break
        case 'Paper':
            playerSign.src = "img/paper.png"
            break
        case 'Scissors':
            playerSign.src = "img/scissors.png"
            break
    }

    switch (computerWeapon) {
        case 'Rock':
            computerSign.src = "img/rock.png"
            break
        case 'Paper':
            computerSign.src = "img/paper.png"
            break
        case 'Scissors':
            computerSign.src = "img/scissors.png"
            break
    }


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
    
    if (isGameEnd(computerScore, userScore) === true) {
        if (computerScore > userScore) {
            alert('You Lost')
        } else {
            alert('You Won')
        }
    }
}