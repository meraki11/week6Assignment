/*Unit Tests for Week 6 Assignment*/

var expect = chai.expect;

describe('MyWarGameFunctions', function() {
    describe('#new Card', function() {
        it('should create a playing card based on suit and value entered', function() {
            expect("suite: 'spades', value: '2'");
        });

        it('should throw an error if parameters are not in string format', function() {
            expect(function() {
                new Card(x, 1);
            }).to.throw(Error);
        });
    }); 

    describe('#createDeck', function() {
        it('should create a deck of 52 cards', function() {
            expect(function() {
                cards.length === 52;
            });
        })
        
        it('should throw an error if there are not 52 cards', function() {
            expect(function() {
                cards.length != 52;     
            }).to.throw(Error);
        });

        it('should throw an error of the 52 cards are not unique suits and values', function() {
            expect(function() {
                Set(cards).size !== cards.length
            }).to.throw(Error);
        });

    });

    describe('#shuffleDeck', function() {
        it('should start with the deck created by the createDeck function', function() {
            expect(Deck.cards);
        });

        it('should randomize the 52 cards from the deck', function() {
            var r = new Deck();
            var n = new Deck();
            var s = new Deck();
            var t = new Deck();
            expect(r != n);
            expect(r != s);
            expect(r != t);
            expect(n != s);
            expect(n != t);
            expect(s != t);
        });

        it('should throw an error if there are not 52 cards', function() {
            expect(function() {
                Deck.cards.length != 52;     
            }).to.throw(Error);
        });

    });

    describe('#new Player', function() {
        it('should create a player based on the id entered, set cards to empty array,set score to 0', function() {
            var p1 = new Player('Falken');
            var p2 = new Player('Joshua');
            expect(p1 = 'Falken', [], 0);
            expect(p2 = 'Joshua', [], 0);
        });

        it('should throw an error if name is not entered, cards in hand > 26, or score is < 0 or > 26', function() {
            expect(function() {
                new Player(null, [], 0);
                new Player('name', cards.length > 26, 0);
                new Player('name', [], player.playerScore > 27);
            }).to.throw(Error);
        });
    }); 

    describe('#start', function() {
        it('should ask for players names and set player score to 0', function() {
            expect("playerName: 'string', playerScore = 0");
        });

        it('should throw an error if playerName is not a string', function() {
            expect(function() {
                new Player(x);
            }).to.throw(Error);
        });

        it('should throw an error if the player score is not set to 0', function() {
            expect(function() {
                playerScore != 0;
            }).to.throw(Error);
        });
    });

    describe('#dealDeck', function() { 
        /*since createDeck and shuffleDeck are already tested above they are not included here*/
        it('should create and shuffle a new deck and deal 26 cards to each player', function() {
            expect(function() {
                playerCards.length == 26;
            });    
        });

        it('should throw an error if each player does not have 26 cards', function() {
            expect(function() {
                playerCards.length != 26;
            }).to.throw(Error);
        });
    });

    describe('#compareCards', function() {
        it('should compare each card in each players hand', function() {
            expect(function() {
            let c1 = new Card('hearts', '6');
            let c2 = new Card('diamonds', '7');
            let c3 = new Card('spades', '10');
            expect(c1 < c2);
            expect(c2 < c3);
            expect(c3 > c1);
            });
        });

        it('should return point for winning hand or no points for tie', function() {
            expect(function() {
            let p1 = (new Card('clubs', '8') > new Card('clubs', '2'));
            let p2 = (new Card('hearts', '4') > new Card('clubs', '9'));
            let p3 = (new Card('diamonds', '7') > new Card('diamonds', '7'));
            expect(p1 = playerOneName.playerScore.value += 1);
            expect(p2 = playerTwoName.playerScore.value += 1);
            expect(p3 = playerScore.value += 0);
            });
        });
    });

});
