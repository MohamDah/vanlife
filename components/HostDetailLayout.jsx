import React from "react"
import { useParams, Link, NavLink, Outlet } from "react-router-dom"

export default function HostVanDetail() {
    const { id } = useParams();
    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [id])

    return (
        <>
            <Link to=".." relative="path" className="detail-back">
                <p><span>{"<"}</span> <span>Back to all vans</span></p>
            </Link>
            <main className="h-d-layout-container">
                {van ? (
                    <>
                        <div className="h-d-layout-header">
                            <img src={van.imageUrl} alt={"image of " + van.name} />
                            <div>
                                <div className={`h-d-layout-type vans-card-type vans-card-type--${van.type}`}>{van.type[0].toUpperCase() + van.type.slice(1)}</div>
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
                ) : <h2>Loading...</h2>}
            </main>
        </>
    )
}