import './Pageheader.scss';
/*Llamado de componentes */
import { Link } from 'react-router-dom'
import { NavBar } from '../../molecules/Navbar/Navbar';
import { CarWidget } from '../../molecules/CarWidget/CarWidget';
import { SearchWindow } from '../../molecules/SearchWindow/SearchWindow'
/*Llamado de imagenes*/
import logoBrand from '../../../../assets/img/logo_web.png';

export const PageHeader = () => {
    return(
        <header>
            <div className="pageHeader">
                <span className="material-icons hamburguesaMenu md-70">menu</span>
                <Link className="logoBrand"  to="/" >
                    <img alt="Logo" src= { logoBrand }/> 
                </Link>
                <NavBar />
                <CarWidget />
                <SearchWindow />
            </div>
        </header>
    )
}