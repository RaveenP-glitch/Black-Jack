
let blackjackGame = {
    'you': {'scoreSpan': '#your-blackjack-result', 'div':'#your-box', 'score':0},
    'dealer':{'scoreSpan': '#dealer-blackjack-result','div': '#dealer-box', 'score':0},

};

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const hitSound = new Audio('sounds/swish.m4a');

document.querySelector('#hit-button').addEventListener('click', blackjackHit);

function blackjackHit() {
   showCard(YOU);
   showCard(DEALER);

}

function showCard(activePlayer){
    let cardImage = document.createElement('img');
    cardImage.src = 'images/Q.png';
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
}

function blackjackDeal(){
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelector('img');

    for(i=0;i<yourImages.length;i++){
        yourImages[i].remove();

    }

    for(i=0;i<dealerImages.length;i++){
        dealerImages[i].remove();

    }

}