import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <main className="notfound-container">
            <h1>Sorry, the page you were looking for was not found.</h1>
            <Link to="/">Return to home</Link>
        </main>
    )
}