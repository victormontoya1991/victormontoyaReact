import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../components/page/login/Login';
import Register from '../components/page/register/Register';

const PublicRouter = () => {
    return (  
        <Routes >
            <Route path='/login'element={<Login />} />
            <Route path='/register'element={<Register />} />
            <Route path='*' element={<Navigate to={"/login"} /> }/>
        </Routes>
    );
}

export default PublicRouter;