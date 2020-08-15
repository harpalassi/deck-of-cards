export class DeckOfCards {
  constructor() {
    this.cards = [];
    this.addCardsToDeck();
  }
  
  addCardsToDeck() {
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
    const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
    
    for (const suit of suits) {
      for (const rank of ranks) {
        const card = {};
        card.suit = suit;
        card.rank = rank;
        this.cards.push(card);
      }
    }
  }
  
  shuffleCards() {
    let currentIndex = this.cards.length, tempValue, randomIndex;
    
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      
      tempValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = tempValue;
    }
    
    return this.cards;
  }
  
  dealACard() {
    if (this.cards.length > 0) {
      return this.cards.pop();
    } else {
      throw new Error("No cards remaining!");
    }
  }
}
