import { Link } from "react-router-dom";

const NavFooter = () => {
    return (  
        <article className='NavFooter'>
            <Link to="/category/Cascos">Cascos</Link>
            <Link to="/category/Guantes">Guantes</Link>
            <Link to="/category/Chaquetas">Chaquetas</Link>
            <Link to="/category/Pantalones">Pantalones</Link>
        </article>
    );
}

export default NavFooter;