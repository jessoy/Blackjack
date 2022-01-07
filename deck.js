function createOrderedDeckOfCards() {
    const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
    const suits = [' of Spades', ' of Diamonds', ' of Clubs', ' of Hearts'];
    const cards = [];
    for (i=0; i<suits.length; i++) {
        for (j=0; j<values.length; j++) {
            let card = {value: values[j], name: `${values[j]}${suits[i]}`};
            cards.push(card);
        }
    }
    cards.forEach (function(card) {
        if (card.value === 'J'||card.value === 'Q'|| card.value === 'K') {
            card.value = 10;
        } 
        if (card.value === 'A') {
            card.value = 1;
        }
    })
    return cards
}

const deck = {
    cards: createOrderedDeckOfCards(),
    shuffleDeck: function() {
        for (k=0; k<this.cards.length; k++) {
            let l = Math.floor(Math.random() * this.cards.length)
            let temp = this.cards[k];
            this.cards[k] = this.cards[l];
            this.cards[l] = temp;
        }
    },
    dealCard: function() {
        return(this.cards.pop());
    },
    dealTwoCards: function() {
        return(this.cards.splice(-2));
    },
    reset: function() {
        if (deck.cards.length < 30) {
            this.cards = createOrderedDeckOfCards();
        }
    }
}

exports.deck = deck;