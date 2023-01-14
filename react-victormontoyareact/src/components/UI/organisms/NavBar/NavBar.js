import './NavBar.scss';
/*Llamado de componentes */
import { MenuBar } from '../../molecules/MenuBar/MenuBar';
import { CarWidget } from '../../molecules/CarWidget/CarWidget';
import { SearchWindow } from '../../molecules/SearchWindow/SearchWindow'
import { LogoBrand } from '../../atoms/LogoBrand/LogoBrand';

export const NavBar = () => {
    return(
        <header>
            <div className="pageHeader">
                <span className="material-icons hamburguesaMenu md-70">menu</span>
                <LogoBrand />
                <MenuBar />
                <CarWidget />
                <SearchWindow />
            </div>
        </header>
    )
}