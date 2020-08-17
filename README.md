# Deck of Cards 🃏🃏🃏

_Deck of Cards_ is built with `JavaScript` and tested using `Jest`. The class creates a deck of 52 cards,
allows users to shuffle the deck, deal a single card, or deal out the deck to several players.

### Installation
Ensure `Node.js` is installed on your system, copy the repository link, and download it to your hard drive using `git clone`. Next, `cd` to the root directory, and run `yarn`
to install the needed dependencies, which include `babel` and `jest`. Relevant files and tests are within
the `src/DeckOfCards` directory.

### Approach
I built a `DeckOfCards` class and designed the deck to hold an array of card objects,
each with a `suit` and `rank` property for clarity and future modularity.
The deck initializes itself with a set of 52 cards. In order to shuffle the deck, I created a `shuffle` method which
takes in a deck argument which could be either an ordered deck, or a shuffled deck in case one wants to keep shuffling.
This method uses the Fisher-Yates shuffle algorithm and does not mutate the original deck - it returns a new shuffled array.  

I created a `dealACard` method that takes in a deck and then mutates this deck to remove a single card object from the array.
Finally, I wrote a `dealAllCards` method. This takes in a deck, and the number of players for the game. It will return a new array,
which consists of sets of equal cards per player, and leaves the remaining cards in the deck. I utilized `Babel` in order to use
`ES6` `import`/`export` syntax. 

### Testing
All methods for the `DeckOfCards` class have unit tests written using Jest. To run tests from the root directory, use `yarn test` on the CLI.
