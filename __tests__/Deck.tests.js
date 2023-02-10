import { Deck } from '@/classes/Deck';
import Card from '@/components/Card';

describe("Deck class", () => {
    const deck = new Deck();
    const deckCards = [
        <Card key={"A ♠"} suit={"♠"} rank={"A"} />,
        <Card key={"2 ♠"} suit={"♠"} rank={"2"} />,
        <Card key={"3 ♠"} suit={"♠"} rank={"3"} />,
        <Card key={"4 ♠"} suit={"♠"} rank={"4"} />,
        <Card key={"5 ♠"} suit={"♠"} rank={"5"} />,
        <Card key={"6 ♠"} suit={"♠"} rank={"6"} />,
        <Card key={"7 ♠"} suit={"♠"} rank={"7"} />,
        <Card key={"8 ♠"} suit={"♠"} rank={"8"} />,
        <Card key={"9 ♠"} suit={"♠"} rank={"9"} />,
        <Card key={"10 ♠"} suit={"♠"} rank={"10"} />,
        <Card key={"J ♠"} suit={"♠"} rank={"J"} />,
        <Card key={"Q ♠"} suit={"♠"} rank={"Q"} />,
        <Card key={"K ♠"} suit={"♠"} rank={"K"} />,
        <Card key={"A ♥"} suit={"♥"} rank={"A"} />,
        <Card key={"2 ♥"} suit={"♥"} rank={"2"} />,
        <Card key={"3 ♥"} suit={"♥"} rank={"3"} />,
        <Card key={"4 ♥"} suit={"♥"} rank={"4"} />,
        <Card key={"5 ♥"} suit={"♥"} rank={"5"} />,
        <Card key={"6 ♥"} suit={"♥"} rank={"6"} />,
        <Card key={"7 ♥"} suit={"♥"} rank={"7"} />,
        <Card key={"8 ♥"} suit={"♥"} rank={"8"} />,
        <Card key={"9 ♥"} suit={"♥"} rank={"9"} />,
        <Card key={"10 ♥"} suit={"♥"} rank={"10"} />,
        <Card key={"J ♥"} suit={"♥"} rank={"J"} />,
        <Card key={"Q ♥"} suit={"♥"} rank={"Q"} />,
        <Card key={"K ♥"} suit={"♥"} rank={"K"} />,
        <Card key={"A ♦"} suit={"♦"} rank={"A"} />,
        <Card key={"2 ♦"} suit={"♦"} rank={"2"} />,
        <Card key={"3 ♦"} suit={"♦"} rank={"3"} />,
        <Card key={"4 ♦"} suit={"♦"} rank={"4"} />,
        <Card key={"5 ♦"} suit={"♦"} rank={"5"} />,
        <Card key={"6 ♦"} suit={"♦"} rank={"6"} />,
        <Card key={"7 ♦"} suit={"♦"} rank={"7"} />,
        <Card key={"8 ♦"} suit={"♦"} rank={"8"} />,
        <Card key={"9 ♦"} suit={"♦"} rank={"9"} />,
        <Card key={"10 ♦"} suit={"♦"} rank={"10"} />,
        <Card key={"J ♦"} suit={"♦"} rank={"J"} />,
        <Card key={"Q ♦"} suit={"♦"} rank={"Q"} />,
        <Card key={"K ♦"} suit={"♦"} rank={"K"} />,
        <Card key={"A ♣"} suit={"♣"} rank={"A"} />,
        <Card key={"2 ♣"} suit={"♣"} rank={"2"} />,
        <Card key={"3 ♣"} suit={"♣"} rank={"3"} />,
        <Card key={"4 ♣"} suit={"♣"} rank={"4"} />,
        <Card key={"5 ♣"} suit={"♣"} rank={"5"} />,
        <Card key={"6 ♣"} suit={"♣"} rank={"6"} />,
        <Card key={"7 ♣"} suit={"♣"} rank={"7"} />,
        <Card key={"8 ♣"} suit={"♣"} rank={"8"} />,
        <Card key={"9 ♣"} suit={"♣"} rank={"9"} />,
        <Card key={"10 ♣"} suit={"♣"} rank={"10"} />,
        <Card key={"J ♣"} suit={"♣"} rank={"J"} />,
        <Card key={"Q ♣"} suit={"♣"} rank={"Q"} />,
        <Card key={"K ♣"} suit={"♣"} rank={"K"} />
    ]

    test("Initial deck", () => {
        expect(deck.size).toBe(52);
        expect(deck.cards).toEqual(deckCards);
    });

    test("getRandomCard from Deck", () => {
        let card = deck.getRandomCard()
        expect(deck.size).toBe(51);
        expect(deckCards).toContainEqual(card);
        expect(deck.cards).not.toContainEqual(card);
    });
});