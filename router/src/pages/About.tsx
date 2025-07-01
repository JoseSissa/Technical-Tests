import { Link } from '../components/Link'

export default function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <p>This is the about page</p>
            {/* <button onClick={() => navigate('/')}>Home</button> */}
            <Link to="/">Home</Link>
            <Link to="/info">Info</Link>
        </>
    )
}