import React from "react"
import { Link } from "react-router-dom"

export default function HostVans() {
    const [vansData, setVansData] = React.useState([])


    // Get data from "api"
    React.useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVansData(data.vans))
    }, [])

    // vans cards
    const vansElements = vansData.map(van => {
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


    return (
        <main className="vans-container">
            <div className="host-vans-card-container">
                <h1 className="vans-title">Your listed vans</h1>
                {vansData.length > 0 ? vansElements : <h1>Loading...</h1>}
            </div>

        </main>
    )
}