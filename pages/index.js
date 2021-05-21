// import Layout from '../components/Layout'
import Link from 'next/link'
import Header from '@/components/Header'
// import Footer from '@/components/Footer'
import styles from '@/styles/Welcome.module.css'
import { FaGithubSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'




export default function Home() {
  return (

    <div className={styles.main}>
       <Header />
        <h1 className={styles.welcome}>
          I'm Kenny Jean
        </h1>

        <div className={styles.content}>
        <p>Welcome to my off portfolio website to showcase all work related to web development.</p>
        <a className={styles.btn} href="#"> Download Resume </a>
        </div>

        <div className={styles.link_btn} >
        <Link href="https://github.com/K-Tech19" target="_blank">
               <a target="_blank"> <FaGithubSquare></FaGithubSquare> </a>
           </Link>


           <Link href="https://www.linkedin.com/in/kennyjean19/">
               <a target="_blank"> <FaLinkedin></FaLinkedin> </a>
           </Link>


           <Link href="https://twitter.com/k_Tech19">
               <a target="_blank"> <FaTwitterSquare></FaTwitterSquare> </a>
           </Link>
        

        </div>
     </div>




  )
}
