// import Layout from '../components/Layout'
import Link from 'next/link'
import Projects from 'pages/projects'


export default function Home() {
  return (
      <div>

        <h1>Kenny's Portfolio</h1>

        <Link href='/about' >
        <a> About </a>
        
        </Link>

        <Link href='/projects' >
        <a> Projects </a>
        
        </Link>



      </div>
  )
}
