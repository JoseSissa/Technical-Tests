import { Link } from "../components/Link";

export default function DinamicPage({ routeParams }: { routeParams: { query: string } }) {
    return (
        <>
            <h1>Dinamic</h1>
            <p>This is the dinamic page</p>
            <p>The query is {routeParams.query}</p>
            <Link to="/about">About</Link>
            <Link to="/info">Info</Link>
        </>
    )
}