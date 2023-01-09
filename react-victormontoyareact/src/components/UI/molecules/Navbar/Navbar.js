import './Navbar.scss';
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return(
        <nav className="callHome">
            <Link to="/">Home</Link>
            <Link to="/category/Cascos">Cascos</Link>
            <Link to="/category/Guantes">Guantes</Link>
            <Link to="/category/Rodilleras">Rodilleras</Link>
            <Link to="/category/Pantalones">Pantalones</Link>
            <Link to="/contact">Contacto</Link>
        </nav>
    )
}