import { Outlet, NavLink } from "react-router-dom";

export default function HostLayout() {
    return (
        <main className="host-container">
            <nav className="nav host-nav">
                <NavLink
                    className={({ isActive }) => isActive ? "page-on" : null}
                    to="."
                    end
                >
                    Dashboard
                </NavLink>
                <NavLink
                    className={({ isActive }) => isActive ? "page-on" : null}
                    to="income"
                >
                    Income
                </NavLink>
                <NavLink
                    className={({ isActive }) => isActive ? "page-on" : null}
                    to="vans"
                >
                    Vans
                </NavLink>
                <NavLink
                    className={({ isActive }) => isActive ? "page-on" : null}
                    to="reviews"
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </main>
    )
}