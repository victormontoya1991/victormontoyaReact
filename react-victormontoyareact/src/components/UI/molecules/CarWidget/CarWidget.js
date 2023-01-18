import { Link } from 'react-router-dom';
import './CarWidget.scss';

export const CarWidget = () => {
    return(
        <Link to="/car" className= "iconCar">
            <div className="numbCar"><p>1</p></div>
            <span className="material-icons md-70">shopping_cart</span>
        </Link>
    )
}
