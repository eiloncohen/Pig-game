/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/





// variables

let scores , roundScore , activePlayer, dice;

scores = [0,0];  // array that store the scores of both players
roundScore = 0;
activePlayer = 0;
let gamePlaying = true;




// events


document.querySelector('.btn-new').addEventListener('click', function(){
    InitializationGame();
});


document.querySelector('.btn-roll').addEventListener('click' , function(){  // display the correct photo for roll dice 
    if(gamePlaying)
    {
    let randNum = Math.floor(Math.random()*6 ) + 1;  
    let dice = document.querySelector('.dice');
    dice.style.display = 'block';
    dice.src = 'dice-' + randNum + '.png';
    let pic = `dice-${randNum}.png`;
    UpdateCurrentBox(pic); // the num enter to the right place.
    }

});



document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
    scores[activePlayer] = scores[activePlayer] + roundScore;
    document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];
    ifWin();
    roundScore = 0;
    document.getElementById(`current-${activePlayer}`).textContent = roundScore; // finish to update first player
    ChangePlayer();
    }
    });





// functions

function InitializationGame()  // Initialize the game
{
    document.getElementById('score-0').textContent = '0'; 
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector(`.player-0-panel`).classList.remove("winner");
    document.querySelector(`.player-1-panel`).classList.remove("winner");
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('name-0').textContent = 'Shaga';
    document.getElementById('name-1').textContent = 'Shag';
    scores[0] = 0;
    scores[1] = 0;
    gamePlaying = true;

}


function UpdateCurrentBox(SrcOfDice)  // add the random number from dice to the roundScore variable and display it on the current box round
{
    let randNum;
    switch(true){
    case SrcOfDice == 'dice-1.png':
    roundScore = 0;    
    document.getElementById(`current-${activePlayer}`).textContent = roundScore;
    ChangePlayer();
    break;
    case SrcOfDice == 'dice-2.png':
    roundScore+=2;   
    document.getElementById(`current-${activePlayer}`).textContent = roundScore;
    break;
    case SrcOfDice == 'dice-3.png':
    roundScore+=3;   
    document.getElementById(`current-${activePlayer}`).textContent = roundScore;
    break;
    case SrcOfDice == 'dice-4.png':
    roundScore+=4;       
    document.getElementById(`current-${activePlayer}`).textContent = roundScore;
    break;
    case SrcOfDice == 'dice-5.png':
    roundScore+=5;     
    document.getElementById(`current-${activePlayer}`).textContent = roundScore;
    break;
    case SrcOfDice == 'dice-6.png':
    roundScore+=6;
    document.getElementById(`current-${activePlayer}`).textContent = roundScore;
    break;        
    }
}

function ifWin() // check if one of the player won the game
{
    if(scores[activePlayer] >= 100)
    {
        document.querySelector(`.player-${activePlayer}-panel`).classList.add("winner");
        document.getElementById(`name-${activePlayer}`).textContent = 'WINNER!';
        alert(`game over! player number ${activePlayer+1} won! `);
        gamePlaying = false;
    }
}

function ChangePlayer()  // switch the turn's 
{
    document.querySelector(`.player-${activePlayer}-panel`).classList.remove("active");
    switch(true)
    {
        case activePlayer == 0:
            activePlayer = 1;
            break;
        case activePlayer == 1:
            activePlayer = 0;
            break;    
    }
    document.querySelector(`.player-${activePlayer}-panel`).classList.add("active");
    document.querySelector('.dice').style.display = 'none';
}





