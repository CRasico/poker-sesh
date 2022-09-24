import { Card } from './card';
import { CardValue } from './card-value';
import { EmptyDeckError } from './empty-deck-error';
import { Suit } from './suit';

/**
 * A deck of cards to be used throughout the game
 *
 * @class Deck
 */
export class Deck {
  cards: Card[];

  constructor() {
    this.cards = [];

    // TODO: need to learn how to easily iterate over enumerations
    // Example: for(let cardValue in CardValue) to iterate over the possible cardValues
    for (let cardValue = 0; cardValue < 13; cardValue++) {
      for (let suitValue = 0; suitValue < 4; suitValue++) {
        this.cards.push({
          value: CardValue[CardValue[cardValue]],
          suit: Suit[Suit[suitValue]]
        });
      }
    }
  }

  /**
   * Gets the total length of the deck. Also known as the remaining number of cards
   *
   * @returns number
   */
  length(): number {
    return this.cards.length;
  }

  /**
   * Draws the top card of the deck if there is one remaining
   *
   * @returns Card
   * @throws EmptyDeckError
   */
  draw(): Card {
    if (this.length() <= 0) {
      throw new EmptyDeckError('Deck is Empty');
    }
    return this.cards.pop();
  }

  /**
   * Shuffles the cards within the deck regardless of how many remain
   *
   * @returns this
   */
  shuffle() {
    for (let i = 0; i < this.cards.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
    return this;
  }
}
