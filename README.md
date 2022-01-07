# Blackjack
> This project is a command-line based application that simulates a game of Blackjack, created with JavaScript. It is made in response to a BBC Software Engineering Graduate Scheme Application.


## Table of Contents
* [Introduction and Purpose](#general-information)
* [Basic Rules and Assumptions](#features)
* [Technologies Used](#technologies-used)
* [Tests Undertaken](#screenshots)
* [Setup](#setup) 
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)


## Introduction and Purpose
- This project was created in response to an application to a software engineering graduate scheme by the BBC
- The challenge was to simulate a hand of blackjack   
- The project is written in JavaScript by authors choice
- The game is interactive and utilises the library `readline-sync` to allow user input


## Technologies Used
- JavaScript ES2015
- HTML5 (see [Room for Improvement / CSS and HTML](#room-for-improvement))
- CSS 2.1  (see [Room for Improvement / CSS and HTML](#room-for-improvement))


## Basic Rules and Assumptions
The basic rules of Blackjack are:
- Blackjack is a comparing card game where the player competes against the dealer
- The object of the game is to reach 21 points without going over 21
- The person closest to 21 wins
- If players' points match, it is a tie
- All number cards are worth their value. The Jack, Queen and King are worth 10 points and the Ace is worth 1 or 11 points  
- Two cards are dealt to each player (including dealer) on the initial deal
- One card is hidden from the dealers initial hand  
- The player is given the choice to hit (to recieve another card to their hand) or to stand (to end their turn without taking a card)
- If the total exceeds 21 points, the player busts
- Play moves onto the dealers hand once the players hand has been finalised
- If both players have valid hands once the dealers hand is finalised, the totals are evaluated and a winner is announced

You can read more about the rules [here](https://en.wikipedia.org/wiki/Blackjack).


The assumptions made in this project are:
- This is a single player game, with user input to play alongside a programmed dealer
- One full deck of cards is used with no jokers, 52 unique cards 
- The suit of the cards does not matter
- This game does not allow betting
- This game does not allow betting-based additional rules such as: back betting, double wager, insurance, surrender or dealer matching
- This game does not allow a player to split their hand if they receive a duplicate card 
- Each players game is played individually and the game moves to the next player only when complete
- The dealer will stand on a 17 or higher
- Any player will stand if a score of 21 is reached
- Once a player has stood, they cannot return to hit 
- If the player busts, the dealer wins and does not play out their hand
- 21 when made of Ace and 10-value card is not preferred to any other combination of 21
- If an Ace is dealt, only the 'best total' is shown, i.e. the total that is closest to 21


## Tests Undertaken
In `testDeck.js` the following tests have been undertaken:
- There are 52 cards in the deck object 
- All cards within the deck object are unique


## Setup
<!--What are the project requirements/dependencies? Where are they listed? A requirements.txt or a Pipfile.lock file perhaps? Where is it located?

Proceed to describe how to install / setup one's local environment / get started with the project. -->

The project is an interactive command-line based application and utilises the library `readline-sync` to allow user input. It is entirely text-based.

The project is intended to be run on a command prompt, e.g GitBash. In order to access the game follow these steps:
- <!-- Download code `index.js` +`deck.js` --> Clone the repository to a directory on your computer 
- Open up a command prompt and navigate to the directory above
- Within the command prompt run `npm install`
- Within the command prompt run `node index.js`
- Play away


## Project Status
This project is: _paused_


## Room for Improvement

### Room for improvement:
- At end of game, on being asked if the player would like to play again only allow inputs of `y` or `n`
- Streamline structure regarding function arguments
- Streamline `index.js` file and seperate objects to another file
- Include more tests e.g. if a player hits continually, they will bust

### To do for future development:
- Allow for multiplayer game. This will be achieved through the addition of a _game object_ containing existing _hand objects_ associated restructuring of existing code
- Allow for multi-hand games. This will ask players how many hands they would like to play and add that number of _hand objects_ to the _game object_
- Allow for players to split their hands if they recieve a duplicate card, e.g. 7 of Diamonds and 7 of Clubs. This will add a _hand object_ to the _game object_ in the event that the first dealt cards have the same number
- Add betting functionality - create a counter within the _game object_ that initially counts number of times a player has won 
- Add graphics to display cards dealt and revealed (see [CSS and HTML](#room-for-improvement) below)

### CSS and HTML  
Within files `style.css`, `index.html` and `main.js`, is the beginnings of developing this project into an interactive web-based application. The HTML file outlines the structure of the game, the CSS file defines the appearance, and the JS file controls the user-interactivity of the application.

<!-- 
- Add graphics to display the cards dealt in HTML and CSS. 
-->

## Acknowledgements

- The use of the `readline-sync` library for user-input functionality was inspired by a Calculator project completed as TechSwitch JavaScript Pre-Reading. Link to project on GitHub [here](https://github.com/jessoy/Coding-Portfolio/tree/main/Calculator)
- This ReadMe documentation was developed based on [this tutorial](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project) by [@flynerdpl](https://www.flynerd.pl/)
- All JavaScript, HTML and CSS learning has been achieved through Codecademy's Online Full-Stack Engineer Course. Codecademy profile link [here](https://www.codecademy.com/profiles/ruby4783957706)


## Contact
Created by [@jessoy](https://github.com/jessoy) - feel free to contact me!# Blackjack
