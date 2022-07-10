//Automated Card Game:  War

//set up deck values for suits, the ranks and their associated numeric values
const Suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
const Ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]
const Values = [14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]   

class Deck {
    constructor(){
        this.deck = [];
    }

//create a new deck of cards from the Suit and Value Arrays into a new array
    newDeck(suits, ranks, values){
        for(let i = 0; i < suits.length; i++){
            for(let j = 0; j < ranks.length; j++){
               let value = values[j];
               let suit = suits[i];
               let rank = ranks[j];

               this.deck.push(new Card(rank, suit, value));
            }
        }
        return this.deck;
    }

//Shuffle the deck of cards by picking random index in the deck and swapping it with another index

    shuffleDeck(){
        for(let i = 0; i < this.deck.length; i++){
            let newIndex = Math.floor(Math.random() * (i + 1));
            let oldIndex = this.deck[newIndex];
            this.deck[newIndex] = this.deck[i];
            this.deck[i] = oldIndex;
        }
        return this.deck;
    }
}

//structure for the class card which holds the value of the card and its suit
class Card {
    constructor(rank, suit, value) {
        this.value = value;
        this.suit = suit;
        this.rank = rank;
    }
}

//create player class to keep score and deal cards
class Player {
    constructor(name){
        this.playername = name;
        this.playercards = [];
    }
}

class War {
    constructor() {
        this.cardsInMiddle = [];
        this.players = [];
    }
    //deal cards to the players
    start(player1, player2) {
        this.players.push(new Player(player1));
        this.players.push(new Player(player2));
        let d = new Deck();
        let p1score = 0;
        let p2score = 0;
        d.newDeck(Suits, Ranks, Values);
        d.shuffleDeck();    
        this.players[0].playercards = d.deck.slice(0, 26);
        this.players[1].playercards = d.deck.slice(26, 52);
    
    //play cards point scored for having a higher values, no points for a tie, compile points until all cards played
    for(let i = 0; i < 26; i++){
        if(this.players[0].playercards[i].value > this.players[1].playercards[i].value){
            p1score += 1;
            //console.log(p1score);
        }else{if(this.players[0].playercards[i].value < this.players[1].playercards[i].value)
            p2score += 1;
            //console.log(p2score);
        }
        //console.log(p1score);
    }
    console.log(this.players[0].playername + " scored : " + p1score + ", " + this.players[1].playername + " scored : " + p2score);
}
}

let game = new War();
game.start("Matt", "Sally");



