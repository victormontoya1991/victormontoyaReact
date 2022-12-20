import './Pageheader.scss';
import { NavBar } from '../Navbar/Navbar';
import { CarWidget } from '../CarWidget/CarWidget';
import { SearchWindow } from '../SearchWindow/SearchWindow'
import logoBrand from '../../assets/img/logo_web.png';

export const PageHeader = () => {

    return(
        <header>
            <div className="logoBrand">
                <img alt="Logo" src= { logoBrand }/> 
            </div>
            <NavBar />
            <CarWidget />
            <SearchWindow />
        </header>
    )
}