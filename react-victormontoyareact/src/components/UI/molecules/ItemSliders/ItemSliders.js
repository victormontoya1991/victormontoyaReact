import './ItemSliders.scss'
import { Link } from "react-router-dom";

const ItemSlider = ({url , image}) => {
    return (  
        <div className="Sliders">
            <Link  to={url} >
                <img alt="Sale" src={image} />
            </Link>
        </div>
    );
}

export default ItemSlider;