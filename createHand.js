function createHand() {
    return {
        playerName: '',
        cards: [],
        status: '',
        getTotal: function () {
            let values = [];
            this.cards.forEach(card => values.push((card.value)));
            if (values.includes(1)) {
                total = [values.reduce((a, b) => a + b), values.reduce((a, b) => a + b) + 10];
                total = this.getBestTotal(total);
                return total;
                //return(`\n ${playerHand.playerName}, you have been dealt an Ace, your total is ${total} or ${total-10}`)
            } else {
                total = (values.reduce((a, b) => a + b));
                return total;
            }
        },
        getBestTotal: function (array) {
            if (array[1] > 21) {
                return array[0];
            } else {
                return array[1];
            }
        },
        getValidity: function () {
            let total = (this.getTotal());
            if (total.length > 1) {
                total = this.getBestTotal(total);
            }
            if (total < 22) {
                return true;
            } else if (total > 21) {
                return false;
            }
        }
    };
}
exports.createHand = createHand;
