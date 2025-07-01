import { Link } from '../components/Link'

export default function HomePage() {
    return (
        <>
            <h1>Home</h1>
            <p>This is the home page</p>
            {/* <button onClick={() => navigate('/about')}>About</button> */}
            <Link to="/about">About</Link>
        </>
    )
}