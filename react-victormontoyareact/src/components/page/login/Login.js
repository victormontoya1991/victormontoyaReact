import './Login.scss'
import React, { useState } from 'react';
import { useLoginContext } from '../../../context/LoginContext';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Login = () => {
    const {login, user}= useLoginContext()

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleInputChange =(e)=>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        login (values)
    }

    return (
        <div className="ContainerLogin">
            <img alt="Name Store" src='https://firebasestorage.googleapis.com/v0/b/victor-montoya-rj.appspot.com/o/banners%2Flogo_web.png?alt=media&token=6ee5c77d-6d84-4744-bb1b-83aca4642db2'/>
            <form onSubmit={handleSubmit}> 
                <input
                    className='input'
                    type="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleInputChange}
                    name="email"
                />
                <input
                    className='input'
                    type="password"
                    value={values.password}
                    onChange={handleInputChange}
                    name="password"
                />
                <button className='ButtonForm' type="submit">Login <ArrowForwardIcon /> </button>
                {user.error && <p className='Alert Error'>
                    <span className="material-icons md-70">info_outline</span>
                    {user.error}
                </p>}
            </form>
            <Link to="/register">Registrarme</Link>
        </div>
        
    );
};

export default Login;
