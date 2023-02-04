import './EmptyCar.scss';
import { Link } from "react-router-dom";

export const EmptyCar = () => {
    return (
        <div className="EmptyCar"> 
            <h2>Upps...  Carro vacio <br/>
                Debes Agregar productos
            </h2>
            <Link to="/"> Ir a la Tienda</Link>
        </div>
    );
}
