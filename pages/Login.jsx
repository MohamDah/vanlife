import { useLoaderData, Form, redirect, useActionData, useNavigation } from "react-router-dom"
import React from "react"
import { loginUser } from "../api"

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")

    const path = new URL(request.url).searchParams.get("redirectTo") || "/host"
    try {
        const user = await loginUser({email, password})
        localStorage.setItem("loggedin", "true")
        return redirect(path)
    } catch(err) {
        return err
    }
    
}

export default function Login() {
    const error = useActionData()
    const status = useNavigation().state
    const message = useLoaderData()

    return (
        <main className="login-container">
            <h1 className="login-title">Log in to your account</h1>
            <Form method="post" className="login-form" replace>
                <h3 className="login-message">{error ? error.message : message ? message : null}</h3>
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button className="login-submit" disabled={status === "submitting"}>{status == "idle" ? "Log in" : "Logging in..."}</button>
            </Form>
        </main>
    )
}