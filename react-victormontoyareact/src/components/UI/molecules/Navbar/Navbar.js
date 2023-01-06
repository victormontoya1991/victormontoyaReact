import './Navbar.scss';
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return(
        <nav className="callHome">
            <Link to="/">Home</Link>
            <Link to="/contact">Contacto</Link>
        </nav>
    )
}