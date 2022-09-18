import { Card, Suit } from '../../src';

describe('card tests', () => {
  test('construct card successful', () => {
    const expectedValue = 1;
    const expectedSuit = Suit.Diamond;

    const card = {
      value: 1,
      suit: Suit.Diamond
    } as Card;

    expect(card.value).toBe(expectedValue);
    expect(card.suit).toBe(expectedSuit);
  });
});
