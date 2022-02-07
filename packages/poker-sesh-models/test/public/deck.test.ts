import { Card, Deck, Suit } from "../../src"

describe('deck test', () => {
    test('construct deck successful', () => {
        const deck = new Deck();
        const frontCard = {
            value: 1,
            suit: Suit.Heart
        } as Card;
        const rearCard = {
            value: 13,
            suit: Suit.Club
        } as Card

        expect(deck.cards.length).toBe(52);
        expect(deck.cards[0]).toBe(frontCard);
        expect(deck.cards[51]).toBe(rearCard);
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