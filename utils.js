import { redirect } from "react-router-dom"

export async function auth(request) {
    const isLoggedIn = localStorage.getItem("loggedin") == "true"
    const pathname = new URL(request.url).pathname

    if (!isLoggedIn) {
        throw redirect(`/login?message=You must login first${pathname ? "&redirectTo="+pathname : ""}`)
    }
}