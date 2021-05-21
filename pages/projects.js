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
            <h3>Covid-tracker 2021</h3>
            <img className={styles.showcase} src="/images/covid-tracker.png" alt="Covid19 tracker" />
            <p>This is a React single-paged application that displays up to date  Covid19 numbers of confirmed, recovered, and deaths for each country in the global.</p>
            <a href="https://k-covid-19-tracker.netlify.app/" target="_blank">Live Site </a>
            <a href="https://github.com/K-Tech19/covid_tracker2021" target="_blank">GitHub </a>
            </div>

        <div className={styles.p2}>
            <h3>Rapid Connect 4</h3>
            <img className={styles.showcase} src="/images/rapid-connect-4.png" alt="Rapid Connect 4" />
            <p>This is a vanilla Javascript app bulit with Javascript, HTML, and CSS </p>
            <a href="https://k-tech19.github.io/P1-connect4/" target="_blank">Live Site </a>
            <a href="https://github.com/K-Tech19/P1-connect4" target="_blank">GitHub </a>
        </div>

        <div className={styles.p3}>
            <h3>GameOverFlow</h3>
            <img className={styles.showcase} src="/images/gameoverflow.png" alt="Game Over Flow" />
            <p>This is a group-based fullstack application that assists newcomers to a specific game ask questions to pros about the game.</p>
            <a href="https://gameoverflow-client.herokuapp.com/" target="_blank">Live Site </a>
            <a href="https://github.com/K-Tech19/gof-mern-client" target="_blank">GitHub </a>
        </div>

        </div>
    )
}
