import Link from 'next/Link'
import Header from '@/components/Header'
import styles from '@/styles/Project.module.css'


export default function ProjectPage() {
    
    


    return (



        <div>

            <Header/>   
          <div className={styles.title}>
            <h2> Projects </h2>

          </div>
          
        <div className={styles.p1}>
            <h3>Black Star Anime</h3>
            <p>This is a fullstack application that assists anime watchers keep track of their favorite anime show and movies.</p>
            <a href="https://black-star-anime.herokuapp.com/auth/login">Live Site </a>
            <a href="https://github.com/K-Tech19/black_star">GitHub </a>
        </div>

        <div className={styles.p2}>
            <h3>Rapid Connect 4</h3>
            <p>This is a vanilla Javascript app bulit with Javascript, HTML, and CSS </p>
            <a href="https://k-tech19.github.io/P1-connect4/">Live Site </a>
            <a href="https://github.com/K-Tech19/P1-connect4">GitHub </a>
        </div>

        <div className={styles.p3}>
            <h3>GameOverFlow</h3>
            <p>This is a group-based fullstack application that assists newcomers to a specific game ask questions to pros about the game.</p>
            <a href="https://gameoverflow-client.herokuapp.com/">Live Site </a>
            <a href="https://github.com/K-Tech19/gof-mern-client">GitHub </a>
        </div>

        <div className={styles.p4}>
            <h3>Covid-tracker 2021</h3>
            <p>This is a React single-paged application that displays up to date  Covid19 numbers of confirmed, recovered, and deaths for each country in the global.</p>
            <a href="https://k-covid-19-tracker.netlify.app/">Live Site </a>
            <a href="https://github.com/K-Tech19/covid_tracker2021">GitHub </a>
            </div>
        </div>
    )
}
