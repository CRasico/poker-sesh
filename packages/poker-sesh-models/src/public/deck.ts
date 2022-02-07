import { Card } from "./card";
import { Suit } from "./suit";

export class Deck {
    // TODO: consider making cards private
    cards: Card[]
    
    constructor() {
        this.cards = []

        for(let cardValue = 0; cardValue < 13; cardValue++) {
            for(const suitString in Suit) {
                this.cards.push({
                    value: cardValue,
                    suit: Suit[Suit[suitString]] // TODO: this is so gross, gotta fix this in the future. Yet I'm not really sure how to do so in javascript.
                })
            }
        }
    }

    length(): number {
        return this.cards.length;
    }

    draw(): Card {
        // TODO: Add error handling here, should be able to throw a "Deck Empty Exception"
        return this.cards.pop();
    }

    shuffle(): void {
        for (let i = 0; i < this.cards.length; i++) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
}