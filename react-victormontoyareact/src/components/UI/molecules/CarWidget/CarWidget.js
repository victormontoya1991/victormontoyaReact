import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarContext } from '../../../../context/CarContext';
import './CarWidget.scss';

export const CarWidget = () => {
    const {mycar} = useContext( CarContext )
    return(
        <Link to="/car" className= "iconCar">
            {(mycar.length===0)
                ?null
                :<div className="numbCar"><p>{mycar.length}</p></div>
            }
            <span className="material-icons md-70">shopping_cart</span>
        </Link>
    )
}
