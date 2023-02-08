import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Card from '@/components/Card'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.heading}>Card Games</h1>
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
        </>
    )
}
