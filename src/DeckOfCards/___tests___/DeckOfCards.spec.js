import { DeckOfCards } from '../DeckOfCards';

describe('Deck Of Cards', () => {
  const playingCards = new DeckOfCards();
  const { deck, dealACard, dealAllCards, shuffle } = playingCards;
  const shuffledDeck = shuffle(deck);
  
  it('deck initializes with 52 cards', () => {
    expect(deck.length).toEqual(52);
  });
  
  it('each card has suit and rank properties', () => {
    deck.forEach((card => {
      expect(card).toHaveProperty('suit');
      expect(card).toHaveProperty('rank');
    }));
  });
  
  it('shuffles the deck of cards', () => {
    const firstCard = deck[0];
    const lastCard = deck[51];
    const shuffledFirstCard = shuffledDeck[0];
    const shuffledLastCard = shuffledDeck[51];
    
    expect(firstCard).not.toEqual(shuffledFirstCard);
    expect(lastCard).not.toEqual(shuffledLastCard);
  });
  
  it('removes single cards from the deck', () => {
    // Deal 3 cards - 49 left in the deck
    dealACard(shuffledDeck);
    dealACard(shuffledDeck);
    dealACard(shuffledDeck);
    expect(shuffledDeck.length).toEqual(49);
  });
  
  it('deals all cards into sets of n cards per player', () => {
    // Deals 13 cards each to 4 players
    const dealtCards = dealAllCards(shuffledDeck, 13);
    expect(dealtCards.length).toEqual(4);
  });
  
});
