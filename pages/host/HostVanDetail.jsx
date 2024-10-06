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

}