import React from "react"
import { useParams, Link } from "react-router-dom"

export default function VanDetail() {
    const { id } = useParams();
    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [id])

    return (

        <main className="detail-container">
            <Link to=".." relative="path" className="detail-back">
                <p><span>{"<"}</span> <span>Back to all vans</span></p>
            </Link>
            {van ? (
                <>  
                    <img className="detail-img" src={van.imageUrl} alt={"image of " + van.name} />
                    <div className={`detail-type vans-card-type vans-card-type--${van.type}`}>{van.type[0].toUpperCase() + van.type.slice(1)}</div>
                    <h1 className="detail-name">{van.name}</h1>
                    <h1 className="detail-price">${van.price}<span>/day</span></h1>
                    <p className="detail-desc">{van.description}</p>
                    <button className="detail-button">Rent this van</button>
                </>
            ) : <h2>Loading...</h2>}
        </main>
    )
}