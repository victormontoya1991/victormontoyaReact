import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useLoginContext } from '../context/LoginContext';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';


const AppRouter = () => {
    const{user} = useLoginContext()
    return ( 
        <BrowserRouter>
            {user.logged
                ?<PrivateRouter />
                :<PublicRouter />
            }
        </BrowserRouter>
    );
}
export default AppRouter;