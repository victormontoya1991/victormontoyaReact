import './Register.scss'
import React, { useState } from 'react';
import { useLoginContext } from '../../../context/LoginContext';
import { Link } from 'react-router-dom';

const Register = () => {
    const { user, register }= useLoginContext()
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
        register (values)
    }
    return (
        <div className="ContainerLogin">
            <h2> Registro de usuarios</h2>
            <form  onSubmit={handleSubmit}> 
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
                {user.error && <p className='Alert Error'>
                    <span className="material-icons md-70">info_outline</span>
                    {user.error}
                </p>}
            </form>
            <Link to="/login">Ir a Login</Link>
        </div>
    );
};

export default Register;
