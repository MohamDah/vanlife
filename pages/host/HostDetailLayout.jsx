import React, { Suspense } from "react"
import { useParams, Link, NavLink, Outlet, useLoaderData, defer, Await } from "react-router-dom"
import { getVan } from "../../api";
import { auth } from "../../utils";
import { ColorRing } from 'react-loader-spinner'

export async function loader({ request, params }) {
    await auth(request)
    const vansPromise = getVan(params.id);
    return defer({ vansPromise })
}


export default function HostVanDetail() {

    return (
        <>
            <Link to="../vans" className="detail-back">
                <p><span>{"<"}</span> <span>Back to all vans</span></p>
            </Link>
            <main className="h-d-layout-container">
                <Suspense fallback={<ColorRing />}>
                    <Await resolve={useLoaderData().vansPromise}>
                        {van => {
                            return (
                                <>
                                    <div className="h-d-layout-header">
                                        <img src={van.imageUrl} alt={"image of " + van.name} />
                                        <div>
                                            <div
                                                className={`h-d-layout-type vans-card-type vans-card-type--${van.type}`}
                                            >
                                                {van.type[0].toUpperCase() + van.type.slice(1)}
                                            </div>
                                            <h1 className="h-d-layout-name">{van.name}</h1>
                                            <h1 className="h-d-layout-price">${van.price}<span>/day</span></h1>
                                        </div>
                                    </div>
                                    <nav className="nav h-d-layout-nav">
                                        <NavLink
                                            className={({ isActive }) => isActive ? "page-on" : null}
                                            to="."
                                            end
                                        >
                                            Details
                                        </NavLink>
                                        <NavLink
                                            className={({ isActive }) => isActive ? "page-on" : null}
                                            to="pricing"
                                        >
                                            Pricing
                                        </NavLink>
                                        <NavLink
                                            className={({ isActive }) => isActive ? "page-on" : null}
                                            to="photos"
                                        >
                                            Photos
                                        </NavLink>
                                    </nav>
                                    <Outlet context={van} />
                                </>
                            )
                        }}
                    </Await>
                </Suspense>
            </main>
        </>
    )
}