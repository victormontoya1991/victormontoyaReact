import './NavBar.scss';
/*Llamado de componentes */
import { MenuBar } from '../../molecules/MenuBar/MenuBar';
import { CarWidget } from '../../molecules/CarWidget/CarWidget';
import { SearchWindow } from '../../molecules/SearchWindow/SearchWindow'
import { LogoBrand } from '../../atoms/LogoBrand/LogoBrand';
import { MenuBurguer } from '../../molecules/MenuBurguer/MenuBurguer';

export const NavBar = () => {
    return(
        <header>
            <div className="pageHeader">
                <MenuBurguer />
                <LogoBrand />
                <MenuBar />
                <div className='ContainerIcon'>
                    <CarWidget />
                </div>
                <SearchWindow />
            </div>
        </header>
    )
}