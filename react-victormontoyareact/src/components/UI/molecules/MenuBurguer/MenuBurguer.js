import './MenuBurguer.scss';
/*Llamado de componentes */
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const MenuBurguer = () => {
    const [show, setShow] = useState (false)
    const open = () => { setShow ( !show )}
    return(
        <div className='HamburguesaMenu'>
            <span onClick={open} className="material-icons hamburguesaMenu md-70">{show ? 'close' : ' menu '}</span>
            {show && 
                <nav className='WindonsMenu'>
                    <Link onClick={open} to="/">Home</Link>
                    <Link onClick={open} to="/category/Cascos">Cascos</Link>
                    <Link onClick={open} to="/category/Guantes">Guantes</Link>
                    <Link onClick={open} to="/category/Rodilleras">Rodilleras</Link>
                    <Link onClick={open} to="/category/Pantalones">Pantalones</Link>
                    <Link onClick={open} to="/contact">Contacto</Link>
                </nav>}
        </div>
    )
}
