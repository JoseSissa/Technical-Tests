import { Link } from "../components/Link";

export function NotFoundPage() {
    return (
        <>
            <h1>404</h1>
            <img src="https://midu.dev/images/this-is-fine-404.gif" alt="Image of This is fine, 404 not found." />
            <Link to={"/"}>Go to Home</Link>
        </>
    )
}