const { deck } = require("./deck");

let success = true;
if (deck.cards.length != 52) {
    console.log('52 cards in deck failed: ' + deck.cards.length)
    success = false
} 
   

const testArray = [];
for (i=0; i<deck.cards.length; i++) {
    if (testArray.includes(deck.cards[i].name)) {
        console.log('duplicate detected: ' + deck.cards[i].name);
        success = false;
    } else {
        testArray.push(deck.cards[i].name)
    }
}

if (success === true) {
    console.log('All tests successful')
}