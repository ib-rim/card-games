import styles from '@/styles/navigation.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import logo from '@/assets/img/logo.png'

export default function Navigation() {

    const router = useRouter();
    const currentRoute = router.pathname;

    return (
        <>
            <nav className={styles.navigation}>
                <Link href="/" className={styles.navigationLink} type="home">
                    <Image src={logo} width="110" height="55"></Image>
                </Link>
                {currentRoute !== "/" ?
                    <>
                        <Link aria-current={currentRoute == "/blackjack" ? "page" : null} href="/blackjack" className={styles.navigationLink}>Blackjack</Link>
                    </>
                    :
                    ""}
            </nav>
        </>
    )
}