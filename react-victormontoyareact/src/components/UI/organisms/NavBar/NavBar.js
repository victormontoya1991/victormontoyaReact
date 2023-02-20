import './NavBar.scss';
/*Llamado de componentes */
import { MenuBar } from '../../molecules/MenuBar/MenuBar';
import { CarWidget } from '../../molecules/CarWidget/CarWidget';
import { LogoBrand } from '../../atoms/LogoBrand/LogoBrand';
import { MenuBurguer } from '../../molecules/MenuBurguer/MenuBurguer';
import { ButtonUser } from '../../atoms/ButtonUser/ButtonUser';

export const NavBar = () => {
    return(
        <header>
            <div className="pageHeader">
                <MenuBurguer />
                <LogoBrand />
                <MenuBar />
                <div className='ContainerIcon'>
                    <ButtonUser />
                    <CarWidget />
                </div>
            </div>
        </header>
    )
}