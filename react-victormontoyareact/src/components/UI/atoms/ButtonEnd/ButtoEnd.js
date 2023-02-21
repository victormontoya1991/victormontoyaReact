import './ButtonEnd.scss'
import { Link } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const ButtonEnd = () => {
    return (
        <Link className='ButtonFin' to="/checkaut"> Finalizar Compra <ArrowForwardIcon /> </Link>
    );
}

export default ButtonEnd;