import styles from '@/styles/blackjack.module.css';
import { useState, useEffect } from 'react';
import {Deck} from '@/classes/Deck';

export default function Blackjack() {

    const [deck, setDeck] = useState([]);

    const [hand, setHand] = useState([]);
    const [minHandValue, setMinHandValue] = useState(0);
    const [maxHandValue, setMaxHandValue] = useState(0);

    const [showOptions, setShowOptions] = useState(true);
    const [showValue, setShowValue] = useState(false);

    useEffect(() => {
        resetGame();
    }, []);

    function resetGame() {
        //Reset deck
        let deck = new Deck();
        setDeck(deck);

        //Reset hand
        let hand = [];
        hand.push(deck.getRandomCard());
        hand.push(deck.getRandomCard());
        setHand(hand);

        //Reset UI
        setShowOptions(true);
        setShowValue(false);
    }

    // Add new card to hand then evaluate
    function hit() {
        let handCards = hand;
        handCards.push(deck.getRandomCard());
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

    //Display value that favours player
    function displayValue() {
        // Default: show lower value if minHandValue under and maxHandValue over
        let text = 'Value';
        let value = minHandValue;

        // Show higher value if both under or equal to 21
        if (minHandValue <= 21 && maxHandValue <= 21) { 
            value = maxHandValue;
        }
        // Show lower value if both over 21
        else if (minHandValue > 21) { 
            text = 'Bust';
        }  
        return <div className={styles.value} status={text.toLowerCase()}>{text}: {value}</div>; 
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.hand}>
                {hand}
            </div>
            {showValue ? displayValue() : <></>}
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
