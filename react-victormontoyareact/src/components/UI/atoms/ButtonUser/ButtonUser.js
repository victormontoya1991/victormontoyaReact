import PersonIcon from '@mui/icons-material/Person';
import './ButtonUser.scss'
import { useLoginContext } from '../../../../context/LoginContext';
import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';

export  const ButtonUser  = () => {
    const { logout } = useLoginContext()
    const [showSubMenu, setShowSubMenu] = useState(null);
    const handleClick = (subMenu) => {
        if (showSubMenu === subMenu) {
        setShowSubMenu(null);
        } else {
        setShowSubMenu(subMenu);
        }
    };
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a onClick={() => handleClick("subUser")} className= "iconUser">
            <PersonIcon className="material-icons" />
            {showSubMenu === 'subUser' && (
                <ul className='subItem'>
                    <button> <FavoriteIcon />List Love</button>
                    <button onClick={logout}> <LogoutIcon />Logout</button>
                </ul>
            )}
        </a>
    );
}