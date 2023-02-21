import PersonIcon from '@mui/icons-material/Person';
import './ButtonUser.scss'
import { useLoginContext } from '../../../../context/LoginContext';

export  const ButtonUser  = () => {
    const { logout } = useLoginContext()
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a onClick={logout} className= "iconUser">
            <PersonIcon className="material-icons" />
        </a>
    );
}