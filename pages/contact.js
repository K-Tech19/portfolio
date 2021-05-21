import Link from 'next/link'
import Header from '@/components/Header'
import styles from '@/styles/Contact.module.css'



export default function ContactPage() {
    
    
    
    return (

        <>
        <Header />

        <form>
            <h2> Contact me here</h2>
            <label>
            Name:
            <input type="text" name="name" />
            </label>
            <label>
            Email:
            <input type="email" name="email" />
            </label>
            <label>
            Message:
            <input type="text" name="message" />
            </label>
            
            
            <input type="submit" value="Submit"  />

        </form>

        </>
    )
}
