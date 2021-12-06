import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router';
import { isAuthenticate } from './authenticate';

const Login = () => {
    const provider = new GoogleAuthProvider();
    const auth = isAuthenticate()
    const googleSingin = () => {
        signInWithPopup(auth, provider)
    }
    const navigate = useNavigate()
    const onSubmit = () => {
        const signuot = () => {
            localStorage.clear()
            navigate("/signin")
        }
        if (auth) {
            return (<div><button onClick={signuot}>đăng xuất</button></div>)
        }else{
            
        }
    }
    return (
        <div>
            {onSubmit()}
            <button onClick={googleSingin}>login google</button>
        </div>
    );
}

export default Login;
