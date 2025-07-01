import { Link } from "../components/Link"

console.log('Soy el componente de contacto')

export default function ContactPage() {
    return (
        <>
            <h1>Contact</h1>
            <p>This is the contact page</p>
            <Link to="/about">About</Link>
            <Link to="/info">Info</Link>
        </>
    )
}