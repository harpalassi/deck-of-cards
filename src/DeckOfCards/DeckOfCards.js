import { suits, ranks } from './CardData';

export class DeckOfCards {
  constructor() {
    this.deck = [];
    this.addCardsToDeck();
  }
  
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
  
  shuffle() {
    const shuffledDeck = [...this.deck];
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
  
  dealACard(deck) {
    if (deck.length > 0) {
      return deck.pop();
    } else {
      throw new Error("No cards remaining!");
    }
  }
  
  dealAllCards(deck, size) {
    const dealtCards = [];
    const deckCopy = [...deck];
    
    while (deckCopy.length > 0) {
      dealtCards.push(deckCopy.splice(0, size));
    }
    
    return dealtCards;
  }
}
