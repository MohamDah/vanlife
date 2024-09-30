import React from "react"

export default function Vans() {
    const [vansData, setVansData] = React.useState([])

    const [filters, setFilters] = React.useState({
        simple: false,
        luxury: false,
        rugged: false
    })

    function changeFilter(name) {
        if (name == "clear") {
            setFilters({
                simple: false,
                luxury: false,
                rugged: false
            })
        } else {
            setFilters(prev => ({
                ...prev,
                [name]: !prev[name]
            }))
        }
    }


    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVansData(data.vans))
    }, [])

    // vans cards
    const vansElements = vansData.map(van => {
        const el = (
            <div key={van.id} className="vans-card">
                <img src={van.imageUrl} alt="image of a van" />
                <h3>{van.name} <span>${van.price}</span></h3>
                <div className={`vans-card-type vans-card-type--${van.type}`}>
                    {van.type[0].toUpperCase() + van.type.slice(1)}
                </div>
            </div>
        )
        if (!Object.keys(filters).some(k => filters[k])) {
            return el
        } else if (filters[van.type]) {
            return el
        }
    })

    // filters
    const filterElements = ["simple", "luxury", "rugged"].map(tag => {
        return (
            <button
                onClick={() => changeFilter(tag)}
                className={`vans-filter ${tag} ${filters[tag] && `vans-card-type--${tag}`}`}
                // className={filters[tag] ? }
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
                <p onClick={() => changeFilter("clear")} className="vans-clear-filters">Clear filters</p>
            </div>

            <div className="vans-card-container">
                {vansElements}
            </div>

        </main>
    )
}