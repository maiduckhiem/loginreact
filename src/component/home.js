import React from 'react';
import { useNavigate } from 'react-router';
import { isAuthenticate } from './authenticate';

const Home = ({ user }) => {
    const auth = isAuthenticate();
    console.log(auth)
    const perpage = 1;
    const start = 0;
    const end = perpage;
    const navigate = useNavigate()
    const onesubmit = () => {
        const signout = () => {
            localStorage.clear()
            navigate("/signin")

        }
        if (auth) {
            return (<div><button onClick={signout}>dang xuat</button></div>)
        } else {
            return (<div>adjfbaj</div>)
        }

    }
    return (
        <div>
            {onesubmit()}
            home
            {user.map((item, index) => {
                if (index >= start && index < end) {
                    return <div key={index}>
                        <div>{item.name}</div>
                    </div>
                }
            })}
        </div>
    );
}

export default Home;
