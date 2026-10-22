import { NavLink } from "react-router";

function NavBar(){
    return(
    <nav className="navbar bg-body-tertiary mb-2">
        <div className="container-fluid">
            <ul className="navbar-nav d-flex flex-row gap-2">
                <li className="nav-item">
                    <NavLink to="/" className={"nav-link"}>Strona główna</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/user" className={"nav-link"}>Użytkownicy</NavLink>
                </li>
            </ul>
        </div>
    </nav>
    );
}

export {NavBar}