import React from "react"
import { Link, useSearchParams, useLoaderData, defer, Await } from "react-router-dom"
import { getVans } from "../../api"
import { Suspense } from "react"
import { ColorRing } from 'react-loader-spinner'

export function loader() {
    const vansPromise = getVans()
    return defer({ vansPromise })
}

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()

    function changeFilter(name) {
        setSearchParams(prev => {
            if (name == "clear") return ""
            if (searchParams.get(name)) {
                prev.delete(name)
            } else {
                prev.set(name, true)
            }
            return prev
        })

    }

    // vans cards
    function renderVansElements(vansData) {
        let vansElements
        vansElements = vansData.map(van => {
            const el = (
                <div key={van.id} className="vans-card">
                    <Link
                        to={`/vans/${van.id}`}
                        state={{ search: searchParams.toString() }}
                        aria-label={`View details for ${van.name}, 
                    priced at $${van.price} per day`}
                    >
                        <img src={van.imageUrl} alt="image of a van" />
                        <h3>{van.name} <span>${van.price}</span></h3>
                        <div className={`vans-card-type vans-card-type--${van.type}`}>
                            {van.type[0].toUpperCase() + van.type.slice(1)}
                        </div>
                    </Link>
                </div>
            )

            // if there are filters, return matching elements, else return all 
            if (searchParams.toString()) {
                return searchParams.get(van.type) && el
            } else return el
        })
        return vansElements
    }

    // filters
    const filterElements = ["simple", "luxury", "rugged"].map(tag => {
        return (
            <button
                key={tag}
                onClick={() => changeFilter(tag)}
                className={`vans-filter ${tag} ${searchParams.get(tag) && `vans-card-type--${tag}`}`}
            >
                {tag[0].toUpperCase() + tag.slice(1)}
            </button>
        )
    })


    return (
        <main className="vans-container">
            <h1 className="vans-title">Explore our van options</h1>
            <div className="vans-filter-container">
                {filterElements}
                {searchParams.toString()
                    ? (<p onClick={() => changeFilter("clear")} className="vans-clear-filters">Clear filters</p>)
                    : null
                }
            </div>

            <div className="vans-card-container">
                <Suspense fallback={<ColorRing />}>
                    <Await resolve={useLoaderData().vansPromise}>
                        {renderVansElements}
                    </Await>
                </Suspense>
            </div>

        </main>
    )
}