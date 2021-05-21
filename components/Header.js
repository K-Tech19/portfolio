import Link from 'next/link'
import styles from '@/styles/Header.module.css'


export default function Header() {
    return (
        
        <header className={styles.header}>
            <div className={styles.logo}>

                <Link href='/'>
                    <a> K-Tech </a>
                </Link>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link href='/about'>
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/projects'>
                            <a>Project</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/contact'>
                            <a>Contacts</a>
                        </Link>
                    </li>

                </ul>

            </nav>


    </header>
    )
}
