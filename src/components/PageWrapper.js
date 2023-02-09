import styles from '@/styles/pagewrapper.module.css';
import Navigation from './Navigation';
import Head from 'next/head';

export default function PageWrapper(props) {

    return (
        <div className={styles.wrapper}>
            <Head>
                <title>Card Games{props.subtitle ? ': '+props.subtitle : ''}</title>
                <meta name="description" content="Card Games Web App" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation/>
            {props.children}
        </div>
    )
}