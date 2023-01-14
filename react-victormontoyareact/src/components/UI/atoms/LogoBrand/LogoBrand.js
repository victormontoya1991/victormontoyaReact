import './LogoBrand.scss'
/*Llamado de imagenes*/
import logoBrand from '../../../../assets/img/logo_web.png';
import { Link } from 'react-router-dom'

export const LogoBrand = () => {
    return(
        <Link className="logoBrand"  to="/" >
            <img alt="Logo" src= { logoBrand }/> 
        </Link>
    )
}