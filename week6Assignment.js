/*Shall we play a game*/
class Card {
    constructor(suit,value) {
        this.suit = suit;
        this.value = value;
        /*working with suit and value only for auto game, card names omitted*/
    }
}

/*testCard = new Card('spades','3');
console.log(testCard);*/

class Deck {
    constructor(){
        this.cards = [];
    }

    createDeck() {
        let suits = ['spades','diamonds','clubs','hearts'];
        let values = ['1','2','3','4','5','6','7','8','9','10','11','12','13'];

        for(let s = 0; s < suits.length; s++) {
            for(let v = 0; v < values.length; v++) {
                    this.cards.push(new Card(suits[s], values[v])); 
            }   
        }     
    }

    shuffleDeck() {
        let location1, location2, tmp;
        for(let i = 0; i < 1000; i++) {
            location1 = Math.floor((Math.random() * this.cards.length));
            location2 = Math.floor((Math.random() * this.cards.length));
            tmp = this.cards[location1];
            this.cards[location1] = this.cards[location2];
            this.cards[location2] = tmp;
        }
    }
}

/*const testDeck = new Deck();
testDeck.createDeck();
testDeck.shuffleDeck();
console.log(testDeck.cards);*/

class Player {
    constructor(name){
        this.playerName = name;
        this.playerCards = [];
        this.playerScore = 0;
    }   
}

testPlayer = new Player('Joshua');
console.log(testPlayer);

class PlayWar {
    constructor() {
        this.players = [];
    }

    start() {
        alert(`SHALL WE PLAY A GAME?`);
        let playerOneName = prompt('Please enter the name of player one: ');
        this.players.push(new Player(playerOneName));
        let playerTwoName = prompt('Please enter the name of player two: ');
        this.players.push(new Player(playerTwoName));
        this.players[0].playerScore = 0;
        this.players[1].playerScore = 0;
    } 

    dealDeck() {
        let d = new Deck();
        d.createDeck();
        d.shuffleDeck();
        this.players[0].playerCards = d.cards.slice(0,26);
        this.players[1].playerCards = d.cards.slice(26,52);
    }

    compareCards() {
        let hand1 = this.players[0].playerCards;
        let hand2 = this.players[1].playerCards;
        /*console.log(hand1,hand2);*/
        while(this.players[0].playerCards.length > 0) {
            let pOneCard = hand1.shift();
            let pTwoCard = hand2.shift(); 
        
            if(+pOneCard.value > +pTwoCard.value) {
                this.players[0].playerScore += 1;
                console.log(`Player 1 earns one point`, pOneCard, pTwoCard);
                } else if(+pOneCard.value < +pTwoCard.value) {
                this.players[1].playerScore += 1;
                console.log(`Player 2 earns one point`, pOneCard, pTwoCard);
                } else {
                console.log('tie', pOneCard, pTwoCard);
            }
        }
           
        alert(`Good Game! Player One Score: ${this.players[0].playerScore} 
               and Player Two Score: ${this.players[1].playerScore}`);
    }

}

let testGame = new PlayWar();
testGame.start();
testGame.dealDeck();
testGame.compareCards();
console.log(testGame.players);

