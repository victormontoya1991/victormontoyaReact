import './Login.scss'
import React, { useState } from 'react';
import { useLoginContext } from '../../../context/LoginContext';

const Login = () => {
    const {login}= useLoginContext()

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
        <form className="ContainerLogin" onSubmit={handleSubmit}> 
            <input
                type="email"
                placeholder="Email"
                value={values.email}
                onChange={handleInputChange}
                name="email"
            />
            <input
                type="password"
                value={values.password}
                onChange={handleInputChange}
                name="password"
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
