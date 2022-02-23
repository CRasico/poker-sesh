import { Card } from "./card";
import { CardValue } from "./card-value";
import { Suit } from "./suit";

export class Deck {
    private cards: Card[]
    
    constructor() {
        this.cards = []

        // TODO: need to learn how to easily iterate over enumerations
        // Example: for(let cardValue in CardValue) to iterate over the possible cardValues
        for(let cardValue = 0; cardValue < 13; cardValue++) {
            for(let suitValue = 0; suitValue < 4; suitValue++) {
                this.cards.push({
                    value: CardValue[CardValue[cardValue]],
                    suit: Suit[Suit[suitValue]] 
                })
            }
        }
    }

    length(): number {
        return this.cards.length;
    }

    draw(): Card {
        return this.cards.pop();
    }

    shuffle(): void {
        for (let i = 0; i < this.cards.length; i++) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
}
