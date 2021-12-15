import React from 'react';
import { useNavigate } from 'react-router';
import { isAuthenticate } from './authenticate';

const Login = () => {
    const auth = isAuthenticate()
    const navigate = useNavigate()
        const signuot = () => {
            localStorage.clear(auth)
            navigate("/signin")
        }

    return (
        <div>
            <button onClick={signuot}>dang xuat</button>
        </div>
    );
}

export default Login;
