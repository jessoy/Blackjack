let first1PictureCards = document.getElementById('firstDeal1');
let first2PictureCards = document.getElementById('firstDeal2');

let dealersFirst = document.getElementById('firstDealer');
let dealersHidden = document.getElementById('firstDealer-hidden');

let playersSecond = document.getElementById('secondDeal');
let playersThird = document.getElementById('thirdDeal');
let playersFourth = document.getElementById('fourthDeal');

let deal = document.getElementById('Deal');
let hit = document.getElementById('Hit');
let stand = document.getElementById('Stand');

let dealerDeal = document.getElementById('DealerButton');

deal.onclick = function() { 
    first1PictureCards.style.display = 'inline-block';
    first2PictureCards.style.display = 'inline-block';
    dealersFirst.style.display = 'inline-block';
    dealersHidden.style.display = 'inline-block';
};

let counter = 0;
hit.onclick = function() {
    counter ++
    if (counter === 1) {
        playersSecond.style.display = 'inline-block';
    }
    if (counter === 2) {
        playersThird.style.display = 'inline-block';
    }
    if (counter === 3) {
        playersFourth.style.display = 'inline-block';
    }
}

stand.onclick = function() {
    dealerDeal.style.display = 'inline-block';
}

dealerDeal.onclick = function() {
    dealersHidden.style.transform = 'none';
    dealersHidden.style.margin = '5px';
    dealersFirst.style.margin = '5px';

}

/*
link other js file to this and show cards 
independant processing?
*/
