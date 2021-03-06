import Link from 'next/Link'
import Header from '@/components/Header'
import styles from '@/styles/About.module.css'

export default function AboutPage() {
    return (
        <div className={styles.main}>
            <Header/>

            <h2> About Me </h2>
            <img className={styles.headshot} src="/images/Headshot.jpeg" alt="Headshot" />
            <p>Hello, my name is Kenny Jean and I am a full-stack developer who enjoys solving tough problems and breaking them down into easily programmable solutions. My previous job was in banking where I spent the last 5 years building trust with my clients and furthering my communication skills, which I am confident I can bring to any role.</p>

            <p>In my past experiences, I was always tasked with helping different clients create new passwords for their accounts. Moreover, I assisted them with getting connected to the in-store WiFi to gain access to their personal records online. With the new skills that I now have, I am able to help small businesses launch their new React single-page company website. Also, I have the ability to persuade clients to update their SEO settings so they can receive more Google searches.</p>

            <p>I am familiar with a variety of programming technologies, including HTML, CSS, JavaScript where I created my first webpage game called Rapid Connect 4. A classic board game with a with an unexpected twist where each player has 30 seconds to make a turn or risk losing it to the opponent. Using the MERN stack or MongoDB, Express, React.Js, and Node.Js I created a full stack application that can be used to search your favorite anime shows & movies and save them to your personal profile so they can viewed later.  Never question if you've ever watched "insert anime name here" show again. I am also well verse in my skills of Python, Django, TypeScript, GIT/GitHub and I'm always adding new skills to my arsenal.</p>
        </div>
    )
}
