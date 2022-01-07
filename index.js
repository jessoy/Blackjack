const readline = require('readline-sync');
const { createHand } = require("./createHand");
const { deck } = require("./deck");

/* WELCOME PHASE */

/* GAME SETUP PHASE */
/* 
- number of players
- number of hands
*/

function getStringInputFromPrompt(prompt) {
    console.log(`\n ${prompt}`);
    return readline.prompt();
}

function printWelcomeMessage() {
    console.log('\n Welcome to Blackjack!');
}

/* DEALING PHASE */

function getPlayerName() {
    let playerName = getStringInputFromPrompt('\n What is your name?')
    return playerName;
}

function dealPlayerHand() {
    const playerHand = createHand();
    playerHand.playerName = `Player ${getPlayerName()}`;
    playerHand.cards = deck.dealTwoCards();
    console.log(`\n ${playerHand.playerName}, you have been dealt: a ${playerHand.cards[0].name}, and a ${playerHand.cards[1].name}`)
    console.log(playerHand.cards)
    printHandTotal(playerHand);
    return playerHand;
}

function dealDealerHand() {
    const dealerHand = createHand();
    dealerHand.playerName = 'The Dealer',
    dealerHand.cards = deck.dealTwoCards();
    console.log(`\n The Dealer has a ${dealerHand.cards[1].name}.`)
    console.log(dealerHand.cards[1])
    return dealerHand;
}

function dealCards() {
    deck.shuffleDeck();
    const playerHand = dealPlayerHand();
    const dealerHand = dealDealerHand();
    return { playerHand, dealerHand };
}

/* PLAYER PLAY PHASE */
/* - Additional rules
*/

function performPlayerPlay(playerHand) {
    while (playerHand.getValidity()) {
        if (playerHand.getTotal() === 21) {
            console.log(`\n You got 21, ${playerHand.playerName}!`);
            return
        }
        const hitMode = '1';
        const standMode = '2';
        let mode = askUserHitOrStand(playerHand) 
        if (mode === hitMode) {
            performHit(playerHand);
        } else if (mode === standMode) {
            // performStand(); // unecessary?          
            return
        }   
    }
    console.log(`\n You have Busted, damn.`);
    playerHand.status = 'Busted'
    return
    /*
    BUSTED
    */
}

function askUserHitOrStand (playerHand) {
    const mode = getStringInputFromPrompt(`${playerHand.playerName}, would you like to Hit or Stand? \n Hit = 1, \n Stand = 2,`)
    return mode
}

function performHit (ownerHand) {
    ownerHand.cards.push(deck.dealCard())
    console.log(`\n A ${ownerHand.cards[ownerHand.cards.length-1].name} has been drawn to ${ownerHand.playerName}`)
    console.log(ownerHand.cards)
    printHandTotal(ownerHand);
}

function performStand() {
    //printHandTotal(playerHand); // unecessary - because total just printed before, within hit?
}

function printHandTotal(ownerHand) {
    console.log(`\n ${ownerHand.playerName}'s running total is ${ownerHand.getTotal()}`);
}

/* DEALER PLAY PHASE */

function performDealerPlay (playerHand, dealerHand) {
    if (playerHand.status != 'Busted') {
        revealHiddenCard(dealerHand)
        printHandTotal(dealerHand)
        while ((dealerHand.getTotal()) < 17) {
            console.log('\n The Dealer hits');
            performHit(dealerHand)
        } if ((dealerHand.getTotal()) < 22) {
            console.log('\n The Dealer stands')
            return
        } else {
            console.log('\n The Dealer has busted')
            console.log(`\n ${playerHand.playerName}, you have won!`)
            dealerHand.status = 'Busted'
            return
        }
    } else {
        console.log('\n The Dealer has won!')
    }
}

function revealHiddenCard(dealerHand) {
    console.log(`\n The Dealer has been dealt: a ${dealerHand.cards[0].name}, and a ${dealerHand.cards[1].name}`)
}

function evaluateWinner(playerHand, dealerHand) {
    if ((playerHand.status != 'Busted') && (dealerHand.status != 'Busted')) {
        if (playerHand.getTotal() > dealerHand.getTotal()) {
            console.log(`\n ${playerHand.playerName}, you have won!`)
        } else if (dealerHand.getTotal() > playerHand.getTotal()) {
            console.log(`\n The Dealer has won. :(`)
        } else {
            console.log(`\n It's a draw.`)
        }
    }
}

function playBlackjackRound(playerHand, dealerHand) {
    performPlayerPlay(playerHand);
    performDealerPlay(playerHand, dealerHand);
    evaluateWinner(playerHand, dealerHand);
}

function playGame () {
    const { playerHand, dealerHand } = dealCards();
    playBlackjackRound(playerHand, dealerHand) 
}

function playAgainQ () {
    const answer = getStringInputFromPrompt('Do you want to play again? \n yes = y, \n no = n,') 
    if (answer === 'y') {
        return true;
    } else if (answer === 'n') {
        return false;
    }
}

/* PLAY PHASE */

printWelcomeMessage();
do {
    playGame()
    deck.reset()
  } while (playAgainQ());
console.log ('Goodbye')

/* EVALUATE PHASE */
/*
- consider a reshuffle (or within game setup)
*/

