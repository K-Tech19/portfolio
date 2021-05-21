// import Layout from '../components/Layout'
import Link from 'next/link'
import Header from '@/components/Header'
// import Footer from '@/components/Footer'
import styles from '@/styles/Welcome.module.css'




export default function Home() {
  return (
      <div>

       <Header />
        <h1 className={styles.welcome}>
          I'm Kenny Jean
        </h1>

        <p>Welcome to my off portfolio website to showcase all work related to web development.</p>
        <button>

        </button>
        



      {/* <Footer/> */}
      </div>
  )
}
