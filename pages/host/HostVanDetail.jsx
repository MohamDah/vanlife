import React from "react"
import { useParams, Link, useOutletContext } from "react-router-dom"

export default function HostVanDetail() {
    const van = useOutletContext()
    return (
        <div className="h-d-detail">
            <p><strong>Name: </strong>{van.name}</p>
            <p><strong>Category: </strong>{van.type[0].toUpperCase() + van.type.slice(1)}</p>
            <p><strong>Description: </strong>{van.description}</p>
            <p><strong>Visibility: </strong>Public</p>
        </div>
    )

    // const { id } = useParams();
    // const [van, setVan] = React.useState(null)

    // React.useEffect(() => {
    //     fetch(`/api/vans/${id}`)
    //         .then(res => res.json())
    //         .then(data => setVan(data.vans))
    // }, [id])

    // return (

    //     <main className="detail-container">
    //         <Link to="/vans" className="detail-back">
    //             <p><span>{"<"}</span> <span>Back to all vans</span></p>
    //         </Link>
    //         {van ? (
    //             <>  
    //                 <img className="host-detail-img" src={van.imageUrl} alt={"image of " + van.name} />
    //                 <div className={`host-detail-type vans-card-type vans-card-type--${van.type}`}>{van.type[0].toUpperCase() + van.type.slice(1)}</div>
    //                 <h1 className="detail-name">{van.name}</h1>
    //                 <h1 className="detail-price">${van.price}<span>/day</span></h1>
    //                 <p className="detail-desc">{van.description}</p>
    //                 <button className="detail-button">Rent this van</button>
    //             </>
    //         ) : <h2>Loading...</h2>}
    //     </main>
    // )
}