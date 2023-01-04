import './Pageheader.scss';
/*Llamado de componentes */
import { NavBar } from '../../molecules/Navbar/Navbar';
import { CarWidget } from '../../molecules/CarWidget/CarWidget';
import { SearchWindow } from '../../molecules/SearchWindow/SearchWindow'
/*Llamado de imagenes*/
import logoBrand from '../../../../assets/img/logo_web.png';

export const PageHeader = () => {
    return(
        <header className="pageHeader">
            <span className="material-icons hamburguesaMenu md-70">menu</span>
            <div className="logoBrand" >
                <img alt="Logo" src= { logoBrand }/> 
            </div>
            <NavBar />
            <CarWidget />
            <SearchWindow />
        </header>
    )
}