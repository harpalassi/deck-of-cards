import { DeckOfCards } from '../DeckOfCards';

let deck;

describe('Deck Of Cards', () => {
  beforeEach(() => {
    deck = new DeckOfCards();
  });
  
  it('deck initializes with 52 cards', () => {
    const {cards} = deck;
    expect(cards.length).toEqual(52);
  });
  
});
