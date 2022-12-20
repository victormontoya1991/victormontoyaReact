import './Pageheader.scss';
import { NavBar } from '../Navbar/Navbar';
import { CarWidget } from '../CarWidget/CarWidget';
import logoBrand from '../../assets/img/logo_web.png';

export const PageHeader = () => {

    return(
        <header>
            <div className="logoBrand">
                <img alt="Logo" src= { logoBrand }/> 
            </div>
            <NavBar />
            <CarWidget />
            <div>
                <input type="text" placeholder="Buscar"/>
            </div>
        </header>
    )
}