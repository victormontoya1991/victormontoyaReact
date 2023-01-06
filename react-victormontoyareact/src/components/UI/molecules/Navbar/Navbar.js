import './Navbar.scss';
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return(
        <nav className="callHome">
            <Link to="/">Home</Link>
            <Link to="/products/Cascos">Cascos</Link>
            <Link to="/products/Guantes">Guantes</Link>
            <Link to="/products/Rodilleras">Rodilleras</Link>
            <Link to="/products/Pantalones">Pantalones</Link>
            <Link to="/contact">Contacto</Link>
        </nav>
    )
}