import styles from '@/styles/Home.module.css';
import Card from '@/components/Card';
import Link from 'next/link';
import PageWrapper from '@/components/PageWrapper';

export default function Home() {
    return (
        <PageWrapper>
            <main className={styles.main}>
                <div className={styles.navigation}>
                    <Link href="/blackjack" className={styles.navigationLink}>
                        <div className={styles.blackjack}>
                            <Card suit="♠" rank="A" />
                            <Card suit="♠" rank="J" />
                        </div>
                        <p className={styles.navigationLinkText}>Blackjack</p>
                    </Link>
                </div>
            </main>
        </PageWrapper>
    )
}
