import { DeckOfCards } from '../DeckOfCards';

let deck;

describe('Deck Of Cards', () => {
  beforeEach(() => {
    deck = new DeckOfCards();
  });
  
  it('deck initializes with 52 cards', () => {
    let {cards} = deck;
    expect(cards.length).toEqual(52);
  });
  
  it('removes single cards from deck', () => {
    deck.dealACard();
    deck.dealACard();
    deck.dealACard();
    expect(deck.cards.length).toEqual(49);
  })
  
});
