import styles from '@/styles/blackjack.module.css';
import { useState} from 'react';

export default function Card(props) {

    const [suit] = useState(props.suit);
    const [rank] = useState(props.rank);

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

    return (
        <div className={styles.card}>
            <div className={styles.rank}>{numToRank(rank)}</div>
            <div className={styles.suit} suit={numToSuit(suit)}>{numToSuit(suit)}</div>
            <div className={styles.rank} location={"bottom-right"}>{numToRank(rank)}</div>
            <div className={styles.suit} location={"bottom-right"} suit={numToSuit(suit)}>{numToSuit(suit)}</div>
        </div>
    )
}