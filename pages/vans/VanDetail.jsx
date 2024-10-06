import React, { Suspense } from "react"
import { Link, useLocation, useLoaderData, defer, Await } from "react-router-dom"
import { getVan } from "../../api";
import { ColorRing } from 'react-loader-spinner'

export function loader({ params }) {
    const vansPromise = getVan(params.id)
    return defer({ vansPromise })
}

export default function VanDetail() {
    const location = useLocation()
    return (
        <main className="detail-container">
            <Link to={`..${"?" + location.state.search}`} relative="path" className="detail-back">
                <p><span>{"<"}</span> <span>Back to all vans</span></p>
            </Link>
            <Suspense fallback={<ColorRing />}>
                <Await resolve={useLoaderData().vansPromise}>
                    {(van) => {
                        return (
                            <>
                                <img className="detail-img" src={van.imageUrl} alt={"image of " + van.name} />
                                <div className={`detail-type vans-card-type vans-card-type--${van.type}`}>{van.type[0].toUpperCase() + van.type.slice(1)}</div>
                                <h1 className="detail-name">{van.name}</h1>
                                <h1 className="detail-price">${van.price}<span>/day</span></h1>
                                <p className="detail-desc">{van.description}</p>
                                <button className="detail-button">Rent this van</button>
                            </>
                        )
                    }}
                </Await>
            </Suspense>
        </main>
    )
}