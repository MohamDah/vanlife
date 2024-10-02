import {Link, NavLink} from "react-router-dom"

export default function Header() {
    return (
        <header>
          <Link className='nav--logo' to="/">#VANLIFE</Link>
          <nav className="nav">
            <NavLink className={({isActive}) => isActive ? "page-on" : null }  to="/host">Host</NavLink>
            <NavLink className={({isActive}) => isActive ? "page-on" : null }  to="/about">About</NavLink>
            <NavLink className={({isActive}) => isActive ? "page-on" : null }  to="/vans">Vans</NavLink>
          </nav>
        </header>
    )
}