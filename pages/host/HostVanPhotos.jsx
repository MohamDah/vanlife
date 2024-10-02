import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
    const van = useOutletContext()
    return (
        <img className="h-d-photos" src={van.imageUrl} alt="van" />
    )
}