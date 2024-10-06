import { useRouteError, Link } from "react-router-dom"

export default function Error() {
    const error = useRouteError();

    return (
        <main className="notfound-container">
            <h1 style={{ color: "darkred" }}>{error.status} - {error.statusText}</h1>
            <h1>{error.message}</h1>
            <Link to="/">Return to home</Link>
        </main>
    )
}