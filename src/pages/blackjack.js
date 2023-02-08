import styles from '@/styles/blackjack.module.css';
import { useState, useEffect } from 'react';
import Card from '@/components/Card';

export default function Blackjack() {

    const [deck, setDeck] = useState([]);
    const [deckSize, setDeckSize] = useState(0); //Number of cards not in play

    const [hand, setHand] = useState([]);

    const [minHandValue, setMinHandValue] = useState(0);
    const [maxHandValue, setMaxHandValue] = useState(0);

    const [showOptions, setShowOptions] = useState(true);
    const [showValue, setShowValue] = useState(false);

    useEffect(() => {
        resetGame();
    }, []);

    function resetGame() {
        let deckCards = [];
        let suits = ["♠", "♥", "♦", "♣"];
        let ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        let numCards = suits.length * ranks.length;
        let hand = [];

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                let suit = suits[i];
                let rank = ranks[j];
                deckCards.push(<Card key={rank +' '+ suit} suit={suit} rank={rank} />);
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
        let minValue = 0; // All Aces are 1s
        let maxValue = 0; // 1 Ace is 11

        // Add values of each card in hand
        for (let i = 0; i < hand.length; i++) {
            let rank = hand[i].props.rank;
            let value = rankToValue(rank);
            minValue += value;
            if (rank === "A") {
                // Limit of one 11 value Ace per hand
                maxValue = minValue + 10;
            }
            else {
                maxValue += value;
            }
        }

        setMinHandValue(minValue);
        setMaxHandValue(maxValue);

        if (minValue > 21) {
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

    // Rank: A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K
    // Value: Integer between 1 and 10 inclusive
    function rankToValue(rank) {
        if (rank === "A") {
            return 1;
        }
        else if (rank >= 2 && rank <= 10) {
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
            {showValue ? //Display value that favours player
                    (minHandValue <= 21 && maxHandValue <= 21) ?
                        <div className={styles.value}>Value: {maxHandValue}</div> // Both under or equal to 21
                        :
                        minHandValue > 21 ? 
                        <div className={styles.value} status={"bust"}>Bust: {minHandValue}</div> // Both over 21
                        : <div className={styles.value}>Value: {minHandValue}</div> // minHandValue under and maxHandValue over
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
