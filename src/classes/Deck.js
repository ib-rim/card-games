import Card from '@/components/Card';

export class Deck {
    constructor() {

        let suits = ["♠", "♥", "♦", "♣"];
        let ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        
        this.cards = [];
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                let suit = suits[i];
                let rank = ranks[j];
                this.cards.push(<Card key={rank +' '+ suit} suit={suit} rank={rank} />);
            }
        }

        this.size = this.cards.length;
    }

    getRandomCard() {
        let index = Math.floor(Math.random() * (this.size - 2));
        let card = this.cards.splice(index, 1)[0];
        this.size -= 1;
        return card;
    }
}