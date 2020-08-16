import { suits, ranks } from './CardData';

export class DeckOfCards {
  constructor() {
    this.deck = [];
    this.addCardsToDeck();
  }
  
  /**
   * Adds 52 card objects to create a full deck
   * ex: [{suit: "Hearts", rank: "2"}, {suit: "Spades", rank: "King"}]
   **/
  addCardsToDeck() {
    for (const suit of suits) {
      for (const rank of ranks) {
        const card = {};
        card.suit = suit;
        card.rank = rank;
        this.deck.push(card);
      }
    }
  }
  
  /**
   * Takes in a deck and returns a shuffled deck using Fisher-Yates algorithm
   * @param {[object]} deck - array of cards to be shuffled
   * @returns {[object]} - a new shuffled array of cards
   **/
  shuffle(deck) {
    const shuffledDeck = [...deck];
    let currentIndex = shuffledDeck.length, tempValue, randomIndex;
    
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      
      tempValue = shuffledDeck[currentIndex];
      shuffledDeck[currentIndex] = shuffledDeck[randomIndex];
      shuffledDeck[randomIndex] = tempValue;
    }
    
    return shuffledDeck;
  }
  
  /**
   * Takes in a deck (ordered or shuffled) and deals out a single card
   * @param {[object]} deck
   * @returns {object} a single card
   **/
  dealACard(deck) {
    if (deck.length > 0) {
      return deck.pop();
    } else {
      throw new Error("No cards remaining!");
    }
  }
  
  /**
   * Allows all cards in a deck to be dealt out
   * @param {[object]} deck
   * @param {number} numberOfPlayers - the number of players for the game
   * @returns {[object]} an array of equal sets of cards per player - any leftovers are not included
   *
   **/
  dealAllCards(deck, numberOfPlayers) {
    const numberOfCards = Math.floor(52 / numberOfPlayers);
    const dealtCards = [];
    const deckCopy = [...deck];
    
    while (dealtCards.length <= (numberOfPlayers - 1)) {
      dealtCards.push(deckCopy.splice(0, numberOfCards));
    }
    
    return dealtCards;
  }
}
