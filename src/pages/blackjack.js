import styles from '@/styles/blackjack.module.css';
import { useState, useEffect } from 'react';
import Card from '@/components/Card';

export default function Blackjack() {

    const [deck, setDeck] = useState([]);
    const [deckSize, setDeckSize] = useState(0); //Number of cards not in play

    const [hand, setHand] = useState([]);

    const [handValue1, setHandValue1] = useState(0);
    const [handValue2, setHandValue2] = useState(0);

    const [showOptions, setShowOptions] = useState(true);
    const [showValue, setShowValue] = useState(false);

    useEffect(() => {
        resetGame();
    }, []);

    function resetGame() {
        let deckCards = [];
        let numSuits = 4;
        let numRanks = 13;
        let numCards = numSuits * numRanks;
        let hand = [];

        for (let i = 0; i < numSuits; i++) {
            for (let j = 0; j < numRanks; j++) {
                let suit = numToSuit(i + 1);
                let rank = numToRank(j + 1);
                deckCards.push(<Card key={rank + suit} suit={suit} rank={rank} />);
            }
        }

        let index = Math.floor(Math.random() * (numCards - 2));
        let card = deckCards.splice(index, 1)[0];
        numCards -= 1;
        hand.push(card);

        index = Math.floor(Math.random() * (numCards - 2));
        card = deckCards.splice(index, 1)[0];
        numCards -= 1;
        hand.push(card);

        setHand(hand);
        setDeckSize(numCards);
        setDeck(deckCards);

        setShowOptions(true);
        setShowValue(false);
    }

    // Add new card to hand then evaluate
    function hit() {
        let handCards = hand;
        handCards.push(getRandomCard());
        setHand(handCards);
        evaluateHand();
    }

    // Evaluate hand and end game
    function stand() {
        evaluateHand();
        endGame();
    }

    // Evaluate value of hand 
    function evaluateHand() {
        let totalValue1 = 0; // All Aces are 1s
        let totalValue2 = 0; // 1 Ace is 11

        // Add values of each card in hand
        for (let i = 0; i < hand.length; i++) {
            let rank = hand[i].props.rank;
            if (rank === "A") {
                totalValue1 += 1;
                // Limit of one 11 value Ace per hand
                totalValue2 = totalValue1 + 10;
            }
            else {
                totalValue1 += rankToValue(rank);
                totalValue2 += rankToValue(rank);
            }
        }


        console.log(totalValue1);
        console.log(totalValue2);

        setHandValue1(totalValue1);
        setHandValue2(totalValue2);

        if (totalValue1 > 21) {
            endGame();
        }
    }

    // Display value of hand and remove ability to hit or stand
    function endGame() {
        setShowOptions(false);
        setShowValue(true);
    }

    //Get random card from deck
    function getRandomCard() {
        let cards = deck;
        let numCards = deckSize;

        let index = Math.floor(Math.random() * (numCards - 2));
        let card = cards.splice(index, 1)[0];
        setDeck(cards);
        setDeckSize(numCards - 1);
        return card;
    }

    // Num: Integer between 1 and 4 inclusive
    // Suit: ♠, ♥, ♦, ♣
    function numToSuit(num) {
        if (num == 1) {
            return "♠";
        }
        else if (num == 2) {
            return "♥";
        }
        else if (num == 3) {
            return "♦";
        }
        else if (num == 4) {
            return "♣";
        }
    }

    // Num: Integer between 1 and 13 inclusive
    // Rank: A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K
    function numToRank(num) {
        if (num == 1) {
            return "A";
        }
        else if (num >= 2 && num <= 10) {
            return num;
        }
        else if (num == 11) {
            return "J";
        }
        else if (num == 12) {
            return "Q";
        }
        else if (num == 13) {
            return "K";
        }
    }

    // Rank: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K
    // Value: Integer between 2 and 10 inclusive
    function rankToValue(rank) {
        if (rank >= 2 && rank <= 10) {
            return parseInt(rank);
        }
        else if (rank === "J" || rank === "Q" || rank === "K") {
            return 10;
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.hand}>
                {hand}
            </div>
            {showValue ?
                    (handValue1 <= 21 && handValue2 <= 21) ?
                        <div className={styles.value}>Value: {handValue2}</div> // Both under or equal to 21
                        :
                        handValue1 > 21 ? 
                        <div className={styles.value} status={"bust"}>Bust: {handValue1}</div> // Both over 21
                        : <div className={styles.value}>Value: {handValue1}</div> // Value1 under and value2 over
                :
                <></>}
            {showOptions ?
                <div className={styles.options}>
                    <button onClick={() => hit()} className={styles.btn} type={"hit"}>Hit</button>
                    <button onClick={() => stand()} className={styles.btn} type={"stand"}>Stand</button>
                </div>
                :
                <></>}
            <button onClick={() => resetGame()} className={styles.btn} type={"reset"}>Reset</button>
        </div>
    )
}
