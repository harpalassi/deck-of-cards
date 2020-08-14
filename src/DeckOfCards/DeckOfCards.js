export class DeckOfCards {
  constructor() {
    this.cards = [];
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
}
