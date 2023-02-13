import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import './ButtonUser.scss'

export  const ButtonUser  = () => {
    return (
        <Link to="/user" className= "iconUser">
            <PersonIcon className="material-icons" />
        </Link>
    );
}