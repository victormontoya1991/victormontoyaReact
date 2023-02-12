import React, { useState } from 'react';
import firebase from 'firebase';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
            console.log(user);
        })
        .catch((error) => {
            console.error(error);
        });
    };

    return (
        <form onSubmit={handleLogin}>
        <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />
        <button type="submit">Login</button>
        </form>
    );
};

export default Login;
