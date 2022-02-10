import { Card, Deck, Suit } from "../../src"
import { CardValue } from "../../src/public/card-value";

describe('deck test', () => {
    test('construct deck successful', () => {
        const deck = new Deck();
        const frontCard = {
            value: CardValue.Ace,
            suit: Suit.Heart
        } as Card;
        const rearCard = {
            value: CardValue.King,
            suit: Suit.Club
        } as Card

        expect(deck.cards.length).toBe(52);
        expect(deck.cards[0]).toEqual(frontCard);
        expect(deck.cards[51]).toEqual(rearCard);
    })

    test('length returns length of deck', () => {
        const deck = new Deck();

        expect(deck.length()).toBe(deck.cards.length);
    })

    test('draw returns last card in the deck', () => {
        const deck = new Deck();

        const lastCard = deck.cards[51];
        const drawCard = deck.draw();
        expect(drawCard).toBe(lastCard);
    })

    test('shuffle', () => {
        const deck = new Deck();

        const lastCard = deck.cards[51];
        const drawCard = deck.draw();
        expect(drawCard).toBe(lastCard);
    })
})