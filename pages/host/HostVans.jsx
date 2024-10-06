import React, { Suspense } from "react"
import { Link, useLoaderData, defer, Await } from "react-router-dom"
import { getHostVans } from "../../api"
import { auth } from "../../utils"
import { ColorRing } from 'react-loader-spinner'

export async function loader({ request }) {
    await auth(request)
    const vansPromise = getHostVans()
    return defer({ vansPromise })
}

export default function HostVans() {


    // render vans elements function
    function renderVansElements(vansData) {
        return vansData.map(van => {
            const el = (
                <div key={van.id} className="host-vans-card">
                    <Link
                        to={`${van.id}`}
                        aria-label={`View details for ${van.name}, 
                    priced at $${van.price} per day`}
                    >
                        <img src={van.imageUrl} alt="image of a van" />
                        <h3>{van.name} <span>${van.price}/day</span></h3>
                    </Link>
                </div>
            )
            return el
        })
    }


    return (
        <main className="vans-container">
            <div className="host-vans-card-container">
                <h1 className="vans-title">Your listed vans</h1>
                <Suspense fallback={<ColorRing />}>
                    <Await resolve={useLoaderData().vansPromise}>
                        {renderVansElements}
                    </Await>
                </Suspense>
            </div>
        </main>
    )
}