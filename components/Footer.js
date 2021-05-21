import Link from 'next/link'
import styles from '@/styles/Footer.modules.css'
import { FaGithubSquare } from 'react-icons/fa'


export default function Footer() {
    return (
        <footer className={styles.footer}>
       <p>Copyright &copy; Kenny Jean</p>
       
       <ul>
       <li>
           <Link href="https://github.com/K-Tech19">
               <a> <FaGithubSquare></FaGithubSquare> </a>
           </Link>
       </li>
       <li>
           <Link href="https://github.com/K-Tech19">
               <a> <FaGithubSquare></FaGithubSquare> </a>
           </Link>
       </li>
       <li>
           <Link href="https://github.com/K-Tech19">
               <a> <FaGithubSquare></FaGithubSquare> </a>
           </Link>
       </li>

       </ul>





        </footer>
    )
}
