import { DeckOfCards } from '../DeckOfCards';

let deck;

describe('Deck Of Cards', () => {
  beforeEach(() => {
    deck = new DeckOfCards();
  });
  
  it('deck initializes with 52 cards', () => {
    expect(deck.cards.length).toEqual(52);
  });
  
  it('each card has suit and rank properties', () => {
    deck.cards.forEach((card => {
      expect(card).toHaveProperty('suit');
      expect(card).toHaveProperty('rank');
    }));
  });
  
  it('shuffles the deck of cards', () => {
    const firstCard = deck.cards[0];
    const lastCard = deck.cards[51];
    
    deck.shuffleCards();
    
    const shuffledFirstCard = deck.cards[0];
    const shuffledLastCard = deck.cards[51];
    
    expect(firstCard).not.toEqual(shuffledFirstCard);
    expect(lastCard).not.toEqual(shuffledLastCard);
  });
  
  it('removes single cards from the deck', () => {
    deck.dealACard();
    deck.dealACard();
    deck.dealACard();
    expect(deck.cards.length).toEqual(49);
  });
  
  it('deals all cards into sets of n cards per player', () => {
    deck.shuffleCards();
    expect(deck.dealAllCards(deck.cards, 13).length).toEqual(4);
  });
  
});
