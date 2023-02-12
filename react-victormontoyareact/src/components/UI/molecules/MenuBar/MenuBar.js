import './MenuBar.scss';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export const MenuBar = () => {
    const [showSubMenu, setShowSubMenu] = useState(null);
    const handleClick = (subMenu) => {
        if (showSubMenu === subMenu) {
        setShowSubMenu(null);
        } else {
        setShowSubMenu(subMenu);
        }
    };
    return(
        <nav className="callHome">
            <Link to="/" onClick={() => handleClick("subMenu")}>Home</Link>
            <button className='item' onClick={() => handleClick("subMenu1")}>
                <ul className='title'><p>Store</p>
                <KeyboardArrowDownIcon />
                </ul>
                {showSubMenu === 'subMenu1' && (
                    <ul className='subItem'>
                        <Link to="/category/Cascos">Cascos</Link>
                        <Link to="/category/Guantes">Guantes</Link>
                        <Link to="/category/Chaquetas">Chaquetas</Link>
                        <Link to="/category/Pantalones">Pantalones</Link>
                    </ul>
                )}
            </button>
            <Link to="/contact" onClick={() => handleClick("subMenu")}>Contacto</Link>
        </nav>
    )
}
