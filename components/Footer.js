import Link from 'next/link'
import styles from '@/styles/Footer.module.css'
import { FaGithubSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'


export default function Footer() {
    return (
        <footer className={styles.footer}>
       <p>Copyright &copy; Kenny Jean</p>
       


           <Link href="https://github.com/K-Tech19" target="_blank">
               <a target="_blank"> <FaGithubSquare></FaGithubSquare> </a>
           </Link>


           <Link href="https://www.linkedin.com/in/kennyjean19/">
               <a target="_blank"> <FaLinkedin></FaLinkedin> </a>
           </Link>


           <Link href="https://twitter.com/k_Tech19">
               <a target="_blank"> <FaTwitterSquare></FaTwitterSquare> </a>
           </Link>


        </footer>
    )
}
