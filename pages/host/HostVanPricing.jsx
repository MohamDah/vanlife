import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
    const van = useOutletContext()
    return (
        <p className="h-d-pricing">${van.price}.00<small>/day</small></p>
    )
}