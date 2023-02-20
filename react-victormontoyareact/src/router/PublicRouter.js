import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../components/page/login/Login';

const PublicRouter = () => {
    return (  
        <Routes >
            <Route path='/login'element={<Login />} />
            <Route path='*' element={<Navigate to={"/login"} /> }/>
        </Routes>
    );
}

export default PublicRouter;