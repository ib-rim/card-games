import styles from '@/styles/card.module.css';
import { useState} from 'react';

export default function Card(props) {

    const [suit] = useState(props.suit);
    const [rank] = useState(props.rank);

    return (
        <div className={styles.card}>
            <div className={styles.rank}>{rank}</div>
            <div className={styles.suit} suit={suit}>{suit}</div>
            <div className={styles.rank} location={"bottom-right"}>{rank}</div>
            <div className={styles.suit} location={"bottom-right"} suit={suit}>{suit}</div>
        </div>
    )
}